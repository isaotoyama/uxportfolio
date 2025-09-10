import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { getBlogPost } from "~/lib/chroma";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  
  if (!id) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    const post = await getBlogPost(id);
    
    if (!post) {
      throw new Response("Post Not Found", { status: 404 });
    }

    return json({ post });
  } catch (error) {
    console.error("Failed to load blog post:", error);
    
    // Fallback static data based on ID
    const staticPosts: Record<string, BlogPost> = {
      "1": {
        id: "1",
        title: "The Future of Web Development",
        content: `Web development continues to evolve rapidly with new frameworks, tools, and methodologies emerging regularly. As we look toward the future, several key trends are shaping the landscape.

**Artificial Intelligence Integration**

AI is becoming deeply integrated into development workflows. From code completion to automated testing, AI tools are helping developers be more productive while maintaining code quality.

**WebAssembly Adoption**

WebAssembly (WASM) is opening new possibilities for web applications, allowing developers to run code written in languages like Rust, C++, and Go directly in the browser with near-native performance.

**Progressive Web Apps**

PWAs continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences through web technologies.

**Micro-Frontends Architecture**

Large organizations are adopting micro-frontend architectures to allow teams to work independently while maintaining consistency across applications.

The future of web development is exciting, with technologies that promise to make web applications faster, more capable, and easier to maintain.`,
        author: "Jane Doe",
        date: "2025-01-15",
        tags: "web development, technology, trends"
      },
      "2": {
        id: "2", 
        title: "Building Scalable React Applications",
        content: `When building large-scale React applications, architecture decisions made early can have significant impact on maintainability, performance, and developer experience.

**Component Architecture**

Organize components into a clear hierarchy with well-defined responsibilities. Use composition over inheritance and keep components focused on single concerns.

**State Management**

Choose appropriate state management solutions based on your application's complexity. Local state for simple cases, Context for moderate sharing, and libraries like Redux or Zustand for complex global state.

**Code Organization**

Structure your codebase with clear separation of concerns. Group related files together and use consistent naming conventions throughout your application.

**Performance Optimization**

Implement performance best practices from the start: lazy loading, memoization, virtualization for large lists, and careful bundle splitting.

**Testing Strategy**

Establish a comprehensive testing strategy including unit tests, integration tests, and end-to-end tests to ensure reliability as your application grows.

By following these principles, you can build React applications that scale effectively and remain maintainable over time.`,
        author: "Jane Doe",
        date: "2025-01-10", 
        tags: "react, javascript, architecture"
      },
      "3": {
        id: "3",
        title: "UX Design Principles for Developers",
        content: `As a developer, understanding UX design principles can significantly improve the quality of applications you build and your collaboration with design teams.

**Usability Heuristics**

Jakob Nielsen's 10 usability heuristics provide a foundation for evaluating and improving user interfaces. Understanding these principles helps developers make better decisions when implementing designs.

**Accessibility First**

Building accessible applications isn't just about compliance—it's about creating inclusive experiences. Learn WCAG guidelines and use semantic HTML, proper ARIA labels, and keyboard navigation support.

**User-Centered Thinking**

Always consider the user's perspective when making implementation decisions. What seems obvious to a developer might be confusing to users with different mental models.

**Feedback and Error Handling**

Provide clear feedback for user actions and helpful error messages. Users should always understand what's happening and what they can do next.

**Performance as UX**

Loading times and responsiveness directly impact user experience. Optimize for performance and provide loading states to keep users informed.

By incorporating these UX principles into your development process, you'll create applications that are not only functional but truly user-friendly.`,
        author: "Jane Doe",
        date: "2025-01-05",
        tags: "ux design, usability, accessibility"
      }
    };

    const post = staticPosts[id];
    if (!post) {
      throw new Response("Post Not Found", { status: 404 });
    }

    return json({ post });
  }
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <article className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <nav style={{ marginBottom: '2rem' }}>
              <Link 
                to="/blog" 
                style={{ 
                  color: 'var(--primary-color)', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                ← Back to Blog
              </Link>
            </nav>

            <header style={{ marginBottom: '3rem' }}>
              <div className="blog-meta" style={{ marginBottom: '1rem' }}>
                {post.author} • {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                lineHeight: '1.2', 
                marginBottom: '1rem' 
              }}>
                {post.title}
              </h1>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {post.tags.split(', ').map(tag => (
                  <span key={tag} style={{ 
                    background: 'var(--primary-color)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div 
              style={{ 
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'var(--text-primary)'
              }}
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
              }}
            />

            <footer style={{ 
              marginTop: '3rem', 
              paddingTop: '2rem', 
              borderTop: '1px solid var(--border)' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Enjoyed this article? Check out more posts on the blog.
                </p>
                <Link to="/blog" className="btn btn-primary">
                  View All Posts
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </Layout>
  );
}