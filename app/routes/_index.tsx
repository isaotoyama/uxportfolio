import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Layout from "~/components/Layout";
import { getProjects } from "~/lib/chroma";

interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
  category: string;
  image: string;
}

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const projects = await getProjects(6);

    return json({ projects });
  } catch (error) {
    console.error("Failed to load projects:", error);
    
    // Fallback static data
    const projects: Project[] = [
      {
        id: "1",
        title: "E-commerce Platform",
        description: "A modern, responsive e-commerce platform built with React and Node.js",
        technology: "React, Node.js, MongoDB, Stripe",
        category: "Web Development",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: "2", 
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication",
        technology: "React Native, Firebase, Plaid API",
        category: "Mobile Development",
        image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        id: "3",
        title: "AI Data Analytics Dashboard",
        description: "Real-time analytics dashboard with machine learning insights",
        technology: "Python, TensorFlow, D3.js, PostgreSQL",
        category: "Data Science",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ];

    return json({ projects });
  }
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>UX Designer & Developer</h1>
            <p>
              Creating beautiful, functional digital experiences that solve real problems 
              and delight users. Specializing in user research, interface design, and 
              full-stack development.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary">
                Learn More About Me
              </Link>
              <Link to="/blog" className="btn btn-secondary">
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-3">
            {projects.map((project) => (
              <div key={project.id} className="card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover', 
                    borderRadius: '0.5rem',
                    marginBottom: '1rem'
                  }}
                />
                <div style={{ fontSize: '0.875rem', color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {project.category}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  <Link 
                    to={`/project/${project.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {project.title}
                  </Link>
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)'
                }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <strong>Tech:</strong> {project.technology.split(', ').slice(0, 2).join(', ')}
                    {project.technology.split(', ').length > 2 && '...'}
                  </div>
                  <Link 
                    to={`/project/${project.id}`}
                    style={{ 
                      color: 'var(--primary-color)', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      fontSize: '0.875rem'
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                UX/UI Design
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                User research, wireframing, prototyping, and visual design using industry-standard tools.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['Figma', 'Sketch', 'Adobe XD', 'Principle'].map(skill => (
                  <span key={skill} style={{ 
                    background: 'var(--primary-color)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Full-Stack Development
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Modern web technologies, responsive design, and scalable application architecture.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['React', 'TypeScript', 'Node.js', 'Python'].map(skill => (
                  <span key={skill} style={{ 
                    background: 'var(--primary-color)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '1rem',
                    fontSize: '0.875rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}