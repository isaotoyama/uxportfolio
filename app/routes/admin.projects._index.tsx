import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData, Form } from "@remix-run/react";
import { getSession } from "~/lib/session";
import { verifySession } from "~/lib/auth";
import { loadProjects, saveProjects } from "~/lib/storage";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const projects = await loadProjects();
  return json({ projects });
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const formData = await request.formData();
  const action = formData.get("_action");
  const projectId = formData.get("projectId") as string;

  if (action === "delete") {
    const projects = await loadProjects();
    const updatedProjects = projects.filter(p => p.id !== projectId);
    await saveProjects(updatedProjects);
  }

  return redirect("/admin/projects");
}

export default function AdminProjects() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <header style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Link to="/admin" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                ← Back to Dashboard
              </Link>
              <h1 style={{ margin: '0.5rem 0 0 0', color: 'var(--text-primary)' }}>Manage Projects</h1>
            </div>
            <Link to="/admin/projects/new" className="btn btn-primary">
              Add New Project
            </Link>
          </div>
        </div>
      </header>

      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          {projects.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                No projects yet
              </h3>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Create your first project to get started.
              </p>
              <Link to="/admin/projects/new" className="btn btn-primary">
                Add First Project
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {projects.map((project: any) => (
                <div key={project.id} className="card">
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: '1.5rem', alignItems: 'center' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{ 
                        width: '100%', 
                        height: '120px', 
                        objectFit: 'cover', 
                        borderRadius: '0.5rem' 
                      }}
                    />
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>
                        {project.title}
                      </h3>
                      <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                      <div style={{ fontSize: '0.875rem', color: 'var(--primary-color)' }}>
                        {project.category} • {project.technology}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                      <Link 
                        to={`/admin/projects/${project.id}/edit`} 
                        className="btn btn-secondary"
                        style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                      >
                        Edit
                      </Link>
                      <Form method="post" style={{ margin: 0 }}>
                        <input type="hidden" name="_action" value="delete" />
                        <input type="hidden" name="projectId" value={project.id} />
                        <button 
                          type="submit"
                          style={{
                            backgroundColor: '#dc2626',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            width: '100%'
                          }}
                          onClick={(e) => {
                            if (!confirm('Are you sure you want to delete this project?')) {
                              e.preventDefault();
                            }
                          }}
                        >
                          Delete
                        </button>
                      </Form>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}