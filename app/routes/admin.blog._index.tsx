import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData, Form } from "@remix-run/react";
import { getSession } from "~/lib/session";
import { verifySession } from "~/lib/auth";
import { loadBlogPosts, saveBlogPosts } from "~/lib/storage";

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const blogPosts = await loadBlogPosts();
  return json({ blogPosts });
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const formData = await request.formData();
  const action = formData.get("_action");
  const postId = formData.get("postId") as string;

  if (action === "delete") {
    const blogPosts = await loadBlogPosts();
    const updatedPosts = blogPosts.filter(p => p.id !== postId);
    await saveBlogPosts(updatedPosts);
  }

  return redirect("/admin/blog");
}

export default function AdminBlog() {
  const { blogPosts } = useLoaderData<typeof loader>();

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
              <h1 style={{ margin: '0.5rem 0 0 0', color: 'var(--text-primary)' }}>Manage Blog</h1>
            </div>
            <Link to="/admin/blog/new" className="btn btn-primary">
              Write New Post
            </Link>
          </div>
        </div>
      </header>

      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          {blogPosts.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                No blog posts yet
              </h3>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                Write your first blog post to get started.
              </p>
              <Link to="/admin/blog/new" className="btn btn-primary">
                Write First Post
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {blogPosts.map((post: any) => (
                <div key={post.id} className="card">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                        {post.author} • {new Date(post.date).toLocaleDateString()}
                      </div>
                      <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>
                        {post.title}
                      </h3>
                      <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)' }}>
                        {post.excerpt}
                      </p>
                      <div style={{ fontSize: '0.875rem', color: 'var(--primary-color)' }}>
                        Tags: {post.tags}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                      <Link 
                        to={`/admin/blog/${post.id}/edit`} 
                        className="btn btn-secondary"
                        style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                      >
                        Edit
                      </Link>
                      <Form method="post" style={{ margin: 0 }}>
                        <input type="hidden" name="_action" value="delete" />
                        <input type="hidden" name="postId" value={post.id} />
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
                            if (!confirm('Are you sure you want to delete this post?')) {
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