import { json, redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getSession } from "~/lib/session";
import { verifySession } from "~/lib/auth";
import { loadProjects, loadBlogPosts, loadAboutData } from "~/lib/storage";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const [projects, blogPosts, aboutData] = await Promise.all([
    loadProjects(),
    loadBlogPosts(), 
    loadAboutData()
  ]);

  return json({ 
    projects: projects.length,
    blogPosts: blogPosts.length,
    hasAboutData: !!aboutData
  });
}

export default function AdminDashboard() {
  const { projects, blogPosts, hasAboutData } = useLoaderData<typeof loader>();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <header style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ margin: 0, color: 'var(--text-primary)' }}>Admin Dashboard</h1>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/" className="btn btn-secondary">
                View Site
              </Link>
              <Link to="/admin/logout" className="btn btn-primary">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                {projects}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Projects
              </p>
              <Link to="/admin/projects" className="btn btn-primary">
                Manage Projects
              </Link>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                {blogPosts}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Blog Posts
              </p>
              <Link to="/admin/blog" className="btn btn-primary">
                Manage Blog
              </Link>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                {hasAboutData ? '✓' : '✗'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                About Page
              </p>
              <Link to="/admin/about" className="btn btn-primary">
                Edit About
              </Link>
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginBottom: '1rem' }}>Quick Actions</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/admin/projects/new" className="btn btn-secondary">
                Add New Project
              </Link>
              <Link to="/admin/blog/new" className="btn btn-secondary">
                Write New Post
              </Link>
              <Link to="/admin/about" className="btn btn-secondary">
                Update About Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}