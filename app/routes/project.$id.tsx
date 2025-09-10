import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { getProject } from "~/lib/chroma";

interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
  category: string;
  image: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string;
  solution?: string;
  results?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  
  if (!id) {
    throw new Response("Not Found", { status: 404 });
  }

  try {
    const project = await getProject(id);
    
    if (!project) {
      throw new Response("Project Not Found", { status: 404 });
    }

    return json({ project });
  } catch (error) {
    console.error("Failed to load project:", error);
    throw new Response("Project Not Found", { status: 404 });
  }
}

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <article className="section">
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <nav style={{ marginBottom: '2rem' }}>
              <Link 
                to="/" 
                style={{ 
                  color: 'var(--primary-color)', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                ← Back to Portfolio
              </Link>
            </nav>

            <header style={{ marginBottom: '3rem' }}>
              <div style={{ 
                fontSize: '0.875rem', 
                color: 'var(--primary-color)', 
                fontWeight: '600', 
                marginBottom: '1rem' 
              }}>
                {project.category}
              </div>
              
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                lineHeight: '1.2', 
                marginBottom: '1rem' 
              }}>
                {project.title}
              </h1>

              <p style={{ 
                fontSize: '1.25rem', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {project.liveUrl && (
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Live Site
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                )}
              </div>
            </header>

            <div style={{ marginBottom: '3rem' }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  borderRadius: '1rem',
                  boxShadow: 'var(--shadow-lg)'
                }}
              />
            </div>

            <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
              <div className="card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Technologies Used
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.technology.split(', ').map(tech => (
                    <span key={tech} style={{ 
                      background: 'var(--primary-color)', 
                      color: 'white', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '1rem',
                      fontSize: '0.875rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.features && (
                <div className="card">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Key Features
                  </h3>
                  <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {project.fullDescription && (
              <div className="card" style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Project Overview
                </h3>
                <div style={{ 
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  color: 'var(--text-primary)'
                }}>
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: '1rem' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {(project.challenges || project.solution || project.results) && (
              <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                {project.challenges && (
                  <div className="card">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                      Challenges
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {project.challenges}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="card">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                      Solution
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {project.solution}
                    </p>
                  </div>
                )}

                {project.results && (
                  <div className="card">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                      Results
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                      {project.results}
                    </p>
                  </div>
                )}
              </div>
            )}

            <footer style={{ 
              marginTop: '3rem', 
              paddingTop: '2rem', 
              borderTop: '1px solid var(--border)' 
            }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Interested in working together? Let's discuss your next project.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Get In Touch
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </Layout>
  );
}