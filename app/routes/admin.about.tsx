import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/lib/session";
import { verifySession } from "~/lib/auth";
import { loadAboutData, saveAboutData } from "~/lib/storage";

const defaultExperience = [
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
];

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const aboutData = await loadAboutData();
  return json({ aboutData });
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const adminSession = session.get("admin");

  if (!verifySession(adminSession)) {
    return redirect("/admin/login");
  }

  const formData = await request.formData();
  const aboutData = {
    name: formData.get("name") as string,
    title: formData.get("title") as string,
    bio: formData.get("bio") as string,
    profileImage: formData.get("profileImage") as string,
    background: formData.get("background") as string,
    approach: formData.get("approach") as string,
    experience: JSON.parse(formData.get("experience") as string || "[]"),
    email: formData.get("email") as string,
    resumeUrl: formData.get("resumeUrl") as string,
  };

  if (!aboutData.name || !aboutData.title) {
    return json({ error: "Name and title are required" }, { status: 400 });
  }

  await saveAboutData(aboutData);
  return json({ success: true });
}

export default function AdminAbout() {
  const { aboutData } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const headerStyle = {
    backgroundColor: 'var(--background)',
    borderBottom: '1px solid var(--border)',
    padding: '1rem 0'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    color: 'var(--primary-color)',
    textDecoration: 'none'
  };

  const titleStyle = {
    margin: '0.5rem 0 0 0',
    color: 'var(--text-primary)'
  };

  const mainStyle = {
    padding: '2rem 0'
  };

  const formContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gap: '1.5rem'
  };

  const twoColumnStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid var(--border)',
    borderRadius: '0.5rem'
  };

  const textareaStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid var(--border)',
    borderRadius: '0.5rem',
    resize: 'vertical'
  };

  const monoTextareaStyle = {
    ...textareaStyle,
    fontFamily: 'monospace',
    fontSize: '0.875rem'
  };

  const smallTextStyle = {
    color: 'var(--text-secondary)',
    fontSize: '0.875rem'
  };

  const errorStyle = {
    color: '#dc2626',
    backgroundColor: '#fef2f2',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #fecaca'
  };

  const successStyle = {
    color: '#059669',
    backgroundColor: '#ecfdf5',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #a7f3d0'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--surface)' }}>
      <header style={headerStyle}>
        <div className="container">
          <div style={containerStyle}>
            <div>
              <Link to="/admin" style={linkStyle}>
                ← Back to Dashboard
              </Link>
              <h1 style={titleStyle}>Edit About Page</h1>
            </div>
            <Link to="/about" className="btn btn-secondary">
              Preview Page
            </Link>
          </div>
        </div>
      </header>

      <main style={mainStyle}>
        <div className="container">
          <div style={formContainerStyle}>
            <Form method="post" className="card">
              <div style={gridStyle}>
                <div style={twoColumnStyle}>
                  <div>
                    <label style={labelStyle}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={aboutData?.name || "Jane Doe"}
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={aboutData?.title || "UX Designer & Developer"}
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>
                    Profile Image URL
                  </label>
                  <input
                    type="url"
                    name="profileImage"
                    defaultValue={aboutData?.profileImage || "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    rows={4}
                    defaultValue={aboutData?.bio || "A passionate UX designer and full-stack developer with over 5 years of experience creating digital products that users love. I bridge the gap between design and development to build experiences that are both beautiful and functional."}
                    style={textareaStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Background
                  </label>
                  <textarea
                    name="background"
                    rows={4}
                    defaultValue={aboutData?.background || "I started my journey in computer science but quickly discovered my passion for user experience design. This unique combination allows me to understand both the technical constraints and user needs, creating solutions that work for everyone."}
                    style={textareaStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Approach
                  </label>
                  <textarea
                    name="approach"
                    rows={4}
                    defaultValue={aboutData?.approach || "I believe great design starts with understanding users. Through research, testing, and iteration, I create experiences that solve real problems while being accessible and delightful to use."}
                    style={textareaStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Experience (JSON format)
                  </label>
                  <textarea
                    name="experience"
                    rows={8}
                    defaultValue={JSON.stringify(aboutData?.experience || defaultExperience, null, 2)}
                    style={monoTextareaStyle}
                  />
                  <small style={smallTextStyle}>
                    Format: {'[{"period": "2020 - Present", "title": "Job Title", "description": "Description"}]'}
                  </small>
                </div>

                <div style={twoColumnStyle}>
                  <div>
                    <label style={labelStyle}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={aboutData?.email || "hello@example.com"}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Resume URL
                    </label>
                    <input
                      type="url"
                      name="resumeUrl"
                      defaultValue={aboutData?.resumeUrl || "/resume.pdf"}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {actionData?.error && (
                  <div style={errorStyle}>
                    {actionData.error}
                  </div>
                )}

                {actionData?.success && (
                  <div style={successStyle}>
                    About page updated successfully!
                  </div>
                )}

                <div style={buttonContainerStyle}>
                  <Link to="/admin" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
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