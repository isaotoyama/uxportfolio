import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import { getSession } from "~/lib/session";
import { verifySession } from "~/lib/auth";
import { loadBlogPosts, saveBlogPosts } from "~/lib/storage";

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
  const postData = {
    id: Date.now().toString(),
    title: formData.get("title") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    author: formData.get("author") as string || "Jane Doe",
    date: new Date().toISOString().split('T')[0],
    tags: formData.get("tags") as string,
  };

  // Validation
  if (!postData.title || !postData.content) {
    return json({ error: "Title and content are required" }, { status: 400 });
  }

  const blogPosts = await loadBlogPosts();
  blogPosts.unshift(postData); // Add to beginning
  await saveBlogPosts(blogPosts);

  return redirect("/admin/blog");
}

export default function NewBlogPost() {
  const actionData = useActionData<typeof action>();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <header style={{
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem 0'
      }}>
        <div className="container">
          <Link to="/admin/blog" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
            ← Back to Blog
          </Link>
          <h1 style={{ margin: '0.5rem 0 0 0', color: 'var(--text-primary)' }}>Write New Post</h1>
        </div>
      </header>

      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Form method="post" className="card">
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
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
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      defaultValue="Jane Doe"
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
                    Excerpt
                  </label>
                  <textarea
                    name="excerpt"
                    rows={2}
                    placeholder="Brief description for the blog listing..."
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
                    Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    placeholder="web development, react, javascript"
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
                    Content *
                  </label>
                  <textarea
                    name="content"
                    required
                    rows={15}
                    placeholder="Write your blog post content here. You can use **bold** text for emphasis."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      resize: 'vertical',
                      fontFamily: 'monospace'
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
                  <Link to="/admin/blog" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Publish Post
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