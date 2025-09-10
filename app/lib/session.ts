import { createCookieSessionStorage } from "@remix-run/node";

const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
    sameSite: "lax",
    secrets: ["your-secret-key-here"],
    secure: process.env.NODE_ENV === "production",
  },
});

export { getSession, commitSession, destroySession };