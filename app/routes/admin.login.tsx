import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { verifyAdmin, createSession } from "~/lib/auth";
import { commitSession, getSession } from "~/lib/session";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return json({ error: "Username and password are required" }, { status: 400 });
  }

  const isValid = await verifyAdmin(username, password);
  
  if (!isValid) {
    return json({ error: "Invalid credentials" }, { status: 401 });
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.set("admin", createSession());

  return redirect("/admin", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function AdminLogin() {
  const actionData = useActionData<typeof action>();

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--surface)'
    }}>
      <div style={{
        backgroundColor: 'var(--background)',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: 'var(--shadow-lg)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: 'var(--text-primary)'
        }}>
          Admin Login
        </h1>
        
        <Form method="post">
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)'
            }}>
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                fontSize: '1rem'
              }}
            />
          </div>

          {actionData?.error && (
            <div style={{
              color: '#dc2626',
              backgroundColor: '#fef2f2',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              border: '1px solid #fecaca'
            }}>
              {actionData.error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Login
          </button>
        </Form>

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem',
          backgroundColor: 'var(--surface)',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)'
        }}>
          <strong>Demo Credentials:</strong><br />
          Username: admin<br />
          Password: password
        </div>
      </div>
    </div>
  );
}