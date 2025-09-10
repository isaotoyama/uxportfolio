import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import { getSession } from "~/lib/session";
import { verifySession } from "~/lib/auth";
import { loadProjects, saveProjects } from "~/lib/storage";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const formData = await request.formData();
  const projectData = {
    id: Date.now().toString(),
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    technology: formData.get("technology") as string,
    category: formData.get("category") as string,
    image: formData.get("image") as string,
    fullDescription: formData.get("fullDescription") as string,
    features: (formData.get("features") as string)?.split('\n').filter(f => f.trim()),
    challenges: formData.get("challenges") as string,
    solution: formData.get("solution") as string,
    results: formData.get("results") as string,
    liveUrl: formData.get("liveUrl") as string,
    githubUrl: formData.get("githubUrl") as string,
  };

  // Validation
  if (!projectData.title || !projectData.description) {
    return json({ error: "Title and description are required" }, { status: 400 });
  }

  const projects = await loadProjects();
  projects.push(projectData);
  await saveProjects(projects);

  return redirect("/admin/projects");
}

export default function NewProject() {
  const actionData = useActionData<typeof action>();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <header style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0'
      }}>
        <div className="container">
          <Link to="/admin/projects" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
            ← Back to Projects
          </Link>
          <h1 style={{ margin: '0.5rem 0 0 0', color: 'var(--text-primary)' }}>Add New Project</h1>
        </div>
      </header>

      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Form method="post" className="card">
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="e.g., Web Development"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Description *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Technologies
                  </label>
                  <input
                    type="text"
                    name="technology"
                    placeholder="React, Node.js, MongoDB"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="https://images.pexels.com/..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Full Description
                  </label>
                  <textarea
                    name="fullDescription"
                    rows={5}
                    placeholder="Detailed project description..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Key Features (one per line)
                  </label>
                  <textarea
                    name="features"
                    rows={4}
                    placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Live URL
                    </label>
                    <input
                      type="url"
                      name="liveUrl"
                      placeholder="https://example.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      name="githubUrl"
                      placeholder="https://github.com/..."
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Challenges
                  </label>
                  <textarea
                    name="challenges"
                    rows={3}
                    placeholder="What challenges did you face?"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Solution
                  </label>
                  <textarea
                    name="solution"
                    rows={3}
                    placeholder="How did you solve them?"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                    Results
                  </label>
                  <textarea
                    name="results"
                    rows={3}
                    placeholder="What were the outcomes?"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {actionData?.error && (
                  <div style={{
                    color: '#dc2626',
                    backgroundColor: '#fef2f2',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #fecaca'
                  }}>
                    {actionData.error}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <Link to="/admin/projects" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Create Project
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </main>
    </div>
  );
}