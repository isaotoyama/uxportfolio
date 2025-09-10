import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { loadAboutData } from "~/lib/storage";

export async function loader({ request }: LoaderFunctionArgs) {
  const aboutData = await loadAboutData();
  return json({ aboutData });
}

export default function About() {
  const { aboutData } = useLoaderData<typeof loader>();
  
  // Use stored data if available, otherwise use defaults
  const data = aboutData || {
    name: "Jane Doe",
    title: "UX Designer & Developer", 
    bio: "A passionate UX designer and full-stack developer with over 5 years of experience creating digital products that users love. I bridge the gap between design and development to build experiences that are both beautiful and functional.",
    profileImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    background: "I started my journey in computer science but quickly discovered my passion for user experience design. This unique combination allows me to understand both the technical constraints and user needs, creating solutions that work for everyone.",
    approach: "I believe great design starts with understanding users. Through research, testing, and iteration, I create experiences that solve real problems while being accessible and delightful to use.",
    experience: [
      {
        period: "2020 - Present",
        title: "Senior UX Designer - TechCorp",
        description: "Lead design for enterprise software products, managing design systems and mentoring junior designers."
      },
      {
        period: "2018 - 2020",
        title: "Full-Stack Developer - StartupXYZ", 
        description: "Built responsive web applications using React, Node.js, and various databases."
      },
      {
        period: "2016 - 2018",
        title: "B.S. Computer Science - University",
        description: "Focused on human-computer interaction and software engineering principles."
      }
    ],
    email: "hello@example.com",
    resumeUrl: "/resume.pdf"
  };
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 className="section-title">About Me</h1>
            
            <div style={{ display: 'grid', gap: '3rem', marginBottom: '3rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'center' }}>
                <img 
                  src={data.profileImage} 
                  alt="Profile"
                  style={{ 
                    width: '100%', 
                    borderRadius: '1rem',
                    aspectRatio: '1/1',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
                    Hi, I'm {data.name}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.7' }}>
                    {data.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
              <div className="card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                  My Background
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {data.background}
                </p>
              </div>

              <div className="card">
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                  My Approach
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {data.approach}
                </p>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem' }}>
                Experience & Education
              </h3>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {data.experience.map((exp: any, index: number) => (
                  <div key={index} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
                      {exp.period}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                        {exp.title}
                      </h4>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Let's Work Together
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                I'm always interested in new challenges and opportunities to create 
                meaningful digital experiences. Whether you need UX design, development, 
                or a combination of both, let's discuss how we can bring your ideas to life.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`mailto:${data.email}`} className="btn btn-primary">
                  Get In Touch
                </a>
                <a href={data.resumeUrl} className="btn btn-secondary" target="_blank">
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}