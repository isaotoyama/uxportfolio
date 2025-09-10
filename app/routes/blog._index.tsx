import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { getBlogPosts } from "~/lib/chroma";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string;
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const blogPosts = await getBlogPosts(10);

    return json({ blogPosts });
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    
    // Fallback static data
    const blogPosts: BlogPost[] = [
      {
        id: "1",
        title: "The Future of Web Development",
        excerpt: "Exploring upcoming trends and technologies shaping the future of web development, including AI integration, WebAssembly, and progressive web apps.",
        author: "Jane Doe",
        date: "2025-01-15",
        tags: "web development, technology, trends"
      },
      {
        id: "2",
        title: "Building Scalable React Applications",
        excerpt: "Best practices for creating maintainable and scalable React applications, covering architecture patterns, state management, and testing strategies.",
        author: "Jane Doe", 
        date: "2025-01-10",
        tags: "react, javascript, architecture"
      },
      {
        id: "3",
        title: "UX Design Principles for Developers",
        excerpt: "Essential UX principles every developer should know to create better user experiences, from usability heuristics to accessibility guidelines.",
        author: "Jane Doe",
        date: "2025-01-05",
        tags: "ux design, usability, accessibility"
      }
    ];

    return json({ blogPosts });
  }
}

export default function BlogIndex() {
  const { blogPosts } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Blog</h1>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              Thoughts on design, development, and the intersection of technology and user experience.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {blogPosts.map((post) => (
                <article key={post.id} className="card">
                  <div className="blog-meta">
                    {post.author} • {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <h2 className="blog-title">
                    <Link 
                      to={`/blog/${post.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="blog-excerpt">
                    {post.excerpt}
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)'
                  }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {post.tags.split(', ').map(tag => (
                        <span key={tag} style={{ 
                          background: 'var(--surface)', 
                          color: 'var(--text-secondary)', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`} 
                      style={{ 
                        color: 'var(--primary-color)', 
                        textDecoration: 'none', 
                        fontWeight: '600' 
                      }}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}