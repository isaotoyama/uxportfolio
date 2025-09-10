var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/global.css
var global_default = "/build/_assets/global-FGUAQHPQ.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/blog._index.tsx
var blog_index_exports = {};
__export(blog_index_exports, {
  default: () => BlogIndex,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData, Link as Link2 } from "@remix-run/react";

// app/components/Layout.tsx
import { Link, useLocation } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  let location = useLocation(), isActive = (path3) => location.pathname === path3 ? "active" : "";
  return /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    /* @__PURE__ */ jsxDEV3("header", { className: "header", children: /* @__PURE__ */ jsxDEV3("div", { className: "container", children: /* @__PURE__ */ jsxDEV3("nav", { className: "nav", children: [
      /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "logo", children: "Portfolio" }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3("ul", { className: "nav-links", children: [
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: isActive("/"), children: "Home" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 24,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 23,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: "/#projects", className: "", children: "Projects" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: "/about", className: isActive("/about"), children: "About" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: "/blog", className: isActive("/blog"), children: "Blog" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(Link, { to: "/admin", style: {
          color: "var(--text-secondary)",
          textDecoration: "none",
          fontSize: "0.875rem"
        }, children: "Admin" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("footer", { className: "footer", children: /* @__PURE__ */ jsxDEV3("div", { className: "container", children: /* @__PURE__ */ jsxDEV3("p", { children: "\xA9 2025 Portfolio. Built with Remix & Chroma DB." }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/lib/chroma.ts
import path2 from "path";

// app/lib/storage.ts
import { writeFile, readFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
var DATA_DIR = path.join(process.cwd(), "data"), PROJECTS_FILE = path.join(DATA_DIR, "projects.json"), BLOG_POSTS_FILE = path.join(DATA_DIR, "blog-posts.json"), ABOUT_FILE = path.join(DATA_DIR, "about.json");
async function loadProjects() {
  try {
    if (!existsSync(PROJECTS_FILE))
      return [];
    let data = await readFile(PROJECTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}
async function loadBlogPosts() {
  try {
    if (!existsSync(BLOG_POSTS_FILE))
      return [];
    let data = await readFile(BLOG_POSTS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}
async function loadAboutData() {
  try {
    if (!existsSync(ABOUT_FILE))
      return null;
    let data = await readFile(ABOUT_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return null;
  }
}

// app/lib/chroma.ts
var DATA_DIR2 = path2.join(process.cwd(), "data"), staticProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A modern, responsive e-commerce platform built with React and Node.js",
    technology: "React, Node.js, MongoDB, Stripe",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription: `This comprehensive e-commerce platform was designed to provide a seamless shopping experience for both customers and administrators. Built with modern web technologies, it features a responsive design that works perfectly across all devices.

The platform includes advanced features like real-time inventory management, secure payment processing through Stripe, and an intuitive admin dashboard for managing products, orders, and customer data.`,
    features: [
      "Responsive design optimized for mobile and desktop",
      "Secure payment processing with Stripe integration",
      "Real-time inventory management",
      "Advanced search and filtering capabilities",
      "Admin dashboard with analytics",
      "Customer account management",
      "Order tracking and notifications"
    ],
    challenges: "The main challenge was creating a scalable architecture that could handle high traffic while maintaining fast load times. Additionally, implementing secure payment processing and ensuring PCI compliance required careful attention to security best practices.",
    solution: "I implemented a microservices architecture with React for the frontend, Node.js for the API layer, and MongoDB for data storage. Used Redis for caching and implemented comprehensive error handling and logging throughout the system.",
    results: "The platform successfully handles over 10,000 daily active users with 99.9% uptime. Page load times average under 2 seconds, and the conversion rate improved by 35% compared to the previous system.",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    technology: "React Native, Firebase, Plaid API",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription: `A cutting-edge mobile banking application that prioritizes security and user experience. The app provides comprehensive banking services including account management, transfers, bill payments, and investment tracking.

Built with React Native for cross-platform compatibility, the app features biometric authentication, real-time transaction notifications, and integration with multiple financial institutions through the Plaid API.`,
    features: [
      "Biometric authentication (fingerprint & face ID)",
      "Real-time account balance and transaction history",
      "Secure money transfers and bill payments",
      "Investment portfolio tracking",
      "Push notifications for transactions",
      "Multi-bank account aggregation",
      "Budgeting and spending analytics"
    ],
    challenges: "Security was the primary concern, requiring implementation of end-to-end encryption, secure key storage, and compliance with banking regulations. The app also needed to work seamlessly across iOS and Android platforms.",
    solution: "Implemented a robust security framework using React Native Keychain for secure storage, integrated Plaid for bank connections, and used Firebase for real-time data synchronization. Applied security best practices including certificate pinning and runtime application self-protection.",
    results: "The app achieved a 4.8-star rating in app stores with over 50,000 downloads in the first six months. Security audits passed with zero critical vulnerabilities, and user engagement increased by 60% compared to the web platform.",
    liveUrl: "https://apps.apple.com/app/example-banking",
    githubUrl: "https://github.com/example/mobile-banking"
  },
  {
    id: "3",
    title: "AI Data Analytics Dashboard",
    description: "Real-time analytics dashboard with machine learning insights",
    technology: "Python, TensorFlow, D3.js, PostgreSQL",
    category: "Data Science",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription: `An advanced analytics dashboard that leverages machine learning to provide actionable insights from complex datasets. The platform processes millions of data points in real-time and presents them through intuitive visualizations.

Built with Python and TensorFlow for the ML pipeline, D3.js for interactive visualizations, and PostgreSQL for data storage. The dashboard serves multiple business units with customizable views and automated reporting.`,
    features: [
      "Real-time data processing and visualization",
      "Machine learning-powered predictive analytics",
      "Interactive charts and graphs with D3.js",
      "Customizable dashboards for different user roles",
      "Automated report generation and scheduling",
      "Data export capabilities (PDF, Excel, CSV)",
      "Advanced filtering and drill-down capabilities"
    ],
    challenges: "Processing large volumes of data in real-time while maintaining responsive user interactions was technically challenging. The ML models needed to be accurate while being computationally efficient for real-time predictions.",
    solution: "Implemented a streaming data pipeline using Apache Kafka, optimized ML models for inference speed, and used WebSocket connections for real-time dashboard updates. Created efficient database indexes and implemented smart caching strategies.",
    results: "The dashboard reduced data analysis time by 80% and improved decision-making speed across the organization. ML predictions achieved 94% accuracy, and the platform now serves over 500 daily active users across multiple departments.",
    liveUrl: "https://analytics.example.com",
    githubUrl: "https://github.com/example/ai-analytics-dashboard"
  }
], staticBlogPosts = [
  {
    id: "1",
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies shaping the future of web development, including AI integration, WebAssembly, and progressive web apps.",
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
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Best practices for creating maintainable and scalable React applications, covering architecture patterns, state management, and testing strategies.",
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
  {
    id: "3",
    title: "UX Design Principles for Developers",
    excerpt: "Essential UX principles every developer should know to create better user experiences, from usability heuristics to accessibility guidelines.",
    content: `As a developer, understanding UX design principles can significantly improve the quality of applications you build and your collaboration with design teams.

**Usability Heuristics**

Jakob Nielsen's 10 usability heuristics provide a foundation for evaluating and improving user interfaces. Understanding these principles helps developers make better decisions when implementing designs.

**Accessibility First**

Building accessible applications isn't just about compliance\u2014it's about creating inclusive experiences. Learn WCAG guidelines and use semantic HTML, proper ARIA labels, and keyboard navigation support.

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
];
async function getProjects(limit) {
  let storedProjects = await loadProjects();
  return storedProjects.length > 0 ? limit ? storedProjects.slice(0, limit) : storedProjects : limit ? staticProjects.slice(0, limit) : staticProjects;
}
async function getBlogPosts(limit) {
  let storedPosts = await loadBlogPosts();
  return storedPosts.length > 0 ? limit ? storedPosts.slice(0, limit) : storedPosts : limit ? staticBlogPosts.slice(0, limit) : staticBlogPosts;
}
async function getBlogPost(id) {
  let storedPost = (await loadBlogPosts()).find((post) => post.id === id);
  return storedPost || staticBlogPosts.find((post) => post.id === id) || null;
}

// app/routes/blog._index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  try {
    let blogPosts = await getBlogPosts(10);
    return json({ blogPosts });
  } catch (error) {
    return console.error("Failed to load blog posts:", error), json({ blogPosts: [
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
    ] });
  }
}
function BlogIndex() {
  let { blogPosts } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4(Layout, { children: /* @__PURE__ */ jsxDEV4("section", { className: "section", children: /* @__PURE__ */ jsxDEV4("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "section-title", children: "Blog" }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { style: { textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }, children: /* @__PURE__ */ jsxDEV4("p", { style: { fontSize: "1.125rem", color: "var(--text-secondary)" }, children: "Thoughts on design, development, and the intersection of technology and user experience." }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { style: { maxWidth: "800px", margin: "0 auto" }, children: /* @__PURE__ */ jsxDEV4("div", { style: { display: "grid", gap: "2rem" }, children: blogPosts.map((post) => /* @__PURE__ */ jsxDEV4("article", { className: "card", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "blog-meta", children: [
        post.author,
        " \u2022 ",
        new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] }, void 0, !0, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 73,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { className: "blog-title", children: /* @__PURE__ */ jsxDEV4(
        Link2,
        {
          to: `/blog/${post.id}`,
          style: { textDecoration: "none", color: "inherit" },
          children: post.title
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 82,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 81,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { className: "blog-excerpt", children: post.excerpt }, void 0, !1, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 90,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
        paddingTop: "1rem",
        borderTop: "1px solid var(--border)"
      }, children: [
        /* @__PURE__ */ jsxDEV4("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: post.tags.split(", ").map((tag) => /* @__PURE__ */ jsxDEV4("span", { style: {
          background: "var(--surface)",
          color: "var(--text-secondary)",
          padding: "0.25rem 0.75rem",
          borderRadius: "1rem",
          fontSize: "0.875rem"
        }, children: tag }, tag, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this)) }, void 0, !1, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4(
          Link2,
          {
            to: `/blog/${post.id}`,
            style: {
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: "600"
            },
            children: "Read More \u2192"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 116,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 94,
        columnNumber: 19
      }, this)
    ] }, post.id, !0, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 70,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 69,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/blog.$id.tsx
var blog_id_exports = {};
__export(blog_id_exports, {
  default: () => BlogPost,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2, Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
async function loader2({ params }) {
  let { id } = params;
  if (!id)
    throw new Response("Not Found", { status: 404 });
  try {
    let post = await getBlogPost(id);
    if (!post)
      throw new Response("Post Not Found", { status: 404 });
    return json2({ post });
  } catch (error) {
    console.error("Failed to load blog post:", error);
    let post = {
      1: {
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
      2: {
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
      3: {
        id: "3",
        title: "UX Design Principles for Developers",
        content: `As a developer, understanding UX design principles can significantly improve the quality of applications you build and your collaboration with design teams.

**Usability Heuristics**

Jakob Nielsen's 10 usability heuristics provide a foundation for evaluating and improving user interfaces. Understanding these principles helps developers make better decisions when implementing designs.

**Accessibility First**

Building accessible applications isn't just about compliance\u2014it's about creating inclusive experiences. Learn WCAG guidelines and use semantic HTML, proper ARIA labels, and keyboard navigation support.

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
    }[id];
    if (!post)
      throw new Response("Post Not Found", { status: 404 });
    return json2({ post });
  }
}
function BlogPost() {
  let { post } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV5(Layout, { children: /* @__PURE__ */ jsxDEV5("article", { className: "section", children: /* @__PURE__ */ jsxDEV5("div", { className: "container", children: /* @__PURE__ */ jsxDEV5("div", { style: { maxWidth: "800px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxDEV5("nav", { style: { marginBottom: "2rem" }, children: /* @__PURE__ */ jsxDEV5(
      Link3,
      {
        to: "/blog",
        style: {
          color: "var(--primary-color)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem"
        },
        children: "\u2190 Back to Blog"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 141,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/blog.$id.tsx",
      lineNumber: 140,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5("header", { style: { marginBottom: "3rem" }, children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "blog-meta", style: { marginBottom: "1rem" }, children: [
        post.author,
        " \u2022 ",
        new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] }, void 0, !0, {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 156,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5("h1", { style: {
        fontSize: "3rem",
        fontWeight: "800",
        lineHeight: "1.2",
        marginBottom: "1rem"
      }, children: post.title }, void 0, !1, {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 164,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: post.tags.split(", ").map((tag) => /* @__PURE__ */ jsxDEV5("span", { style: {
        background: "var(--primary-color)",
        color: "white",
        padding: "0.25rem 0.75rem",
        borderRadius: "1rem",
        fontSize: "0.875rem"
      }, children: tag }, tag, !1, {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 175,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 173,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.$id.tsx",
      lineNumber: 155,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV5(
      "div",
      {
        style: {
          fontSize: "1.125rem",
          lineHeight: "1.8",
          color: "var(--text-primary)"
        },
        dangerouslySetInnerHTML: {
          __html: post.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 188,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV5("footer", { style: {
      marginTop: "3rem",
      paddingTop: "2rem",
      borderTop: "1px solid var(--border)"
    }, children: /* @__PURE__ */ jsxDEV5("div", { style: { textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV5("p", { style: { color: "var(--text-secondary)", marginBottom: "1rem" }, children: "Enjoyed this article? Check out more posts on the blog." }, void 0, !1, {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 205,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(Link3, { to: "/blog", className: "btn btn-primary", children: "View All Posts" }, void 0, !1, {
        fileName: "app/routes/blog.$id.tsx",
        lineNumber: 208,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog.$id.tsx",
      lineNumber: 204,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog.$id.tsx",
      lineNumber: 199,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 139,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 138,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 137,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog.$id.tsx",
    lineNumber: 136,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3, Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
async function loader3({ request }) {
  try {
    let projects = await getProjects(6);
    return json3({ projects });
  } catch (error) {
    return console.error("Failed to load projects:", error), json3({ projects: [
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
    ] });
  }
}
function Index() {
  let { projects } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV6(Layout, { children: [
    /* @__PURE__ */ jsxDEV6("section", { className: "hero", children: /* @__PURE__ */ jsxDEV6("div", { className: "container", children: /* @__PURE__ */ jsxDEV6("div", { className: "hero-content", children: [
      /* @__PURE__ */ jsxDEV6("h1", { children: "UX Designer & Developer" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: "Creating beautiful, functional digital experiences that solve real problems and delight users. Specializing in user research, interface design, and full-stack development." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { style: { display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxDEV6(Link4, { to: "/about", className: "btn btn-primary", children: "Learn More About Me" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6(Link4, { to: "/blog", className: "btn btn-secondary", children: "Read My Blog" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("section", { className: "section", id: "projects", children: /* @__PURE__ */ jsxDEV6("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV6("h2", { className: "section-title", children: "Featured Projects" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-3", children: projects.map((project) => /* @__PURE__ */ jsxDEV6("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV6(
          "img",
          {
            src: project.image,
            alt: project.title,
            style: {
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "0.5rem",
              marginBottom: "1rem"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6("div", { style: { fontSize: "0.875rem", color: "var(--primary-color)", fontWeight: "600", marginBottom: "0.5rem" }, children: project.category }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 98,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("h3", { style: { fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }, children: /* @__PURE__ */ jsxDEV6(
          Link4,
          {
            to: `/project/${project.id}`,
            style: { textDecoration: "none", color: "inherit" },
            children: project.title
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("p", { style: { color: "var(--text-secondary)", marginBottom: "1rem" }, children: project.description }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--border)"
        }, children: [
          /* @__PURE__ */ jsxDEV6("div", { style: { fontSize: "0.875rem", color: "var(--text-secondary)" }, children: [
            /* @__PURE__ */ jsxDEV6("strong", { children: "Tech:" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 121,
              columnNumber: 21
            }, this),
            " ",
            project.technology.split(", ").slice(0, 2).join(", "),
            project.technology.split(", ").length > 2 && "..."
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 120,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6(
            Link4,
            {
              to: `/project/${project.id}`,
              style: {
                color: "var(--primary-color)",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.875rem"
              },
              children: "View Details \u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 124,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 112,
          columnNumber: 17
        }, this)
      ] }, project.id, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("section", { className: "section", style: { backgroundColor: "var(--surface)" }, children: /* @__PURE__ */ jsxDEV6("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV6("h2", { className: "section-title", children: "Skills & Expertise" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "grid grid-2", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "card", children: [
          /* @__PURE__ */ jsxDEV6("h3", { style: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }, children: "UX/UI Design" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { style: { color: "var(--text-secondary)", marginBottom: "1rem" }, children: "User research, wireframing, prototyping, and visual design using industry-standard tools." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: ["Figma", "Sketch", "Adobe XD", "Principle"].map((skill) => /* @__PURE__ */ jsxDEV6("span", { style: {
            background: "var(--primary-color)",
            color: "white",
            padding: "0.25rem 0.75rem",
            borderRadius: "1rem",
            fontSize: "0.875rem"
          }, children: skill }, skill, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 146,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "card", children: [
          /* @__PURE__ */ jsxDEV6("h3", { style: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }, children: "Full-Stack Development" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("p", { style: { color: "var(--text-secondary)", marginBottom: "1rem" }, children: "Modern web technologies, responsive design, and scalable application architecture." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap" }, children: ["React", "TypeScript", "Node.js", "Python"].map((skill) => /* @__PURE__ */ jsxDEV6("span", { style: {
            background: "var(--primary-color)",
            color: "white",
            padding: "0.25rem 0.75rem",
            borderRadius: "1rem",
            fontSize: "0.875rem"
          }, children: skill }, skill, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 177,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 175,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader4({ request }) {
  let aboutData = await loadAboutData();
  return json4({ aboutData });
}
function About() {
  let { aboutData } = useLoaderData4(), data = aboutData || {
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
  return /* @__PURE__ */ jsxDEV7(Layout, { children: /* @__PURE__ */ jsxDEV7("section", { className: "section", children: /* @__PURE__ */ jsxDEV7("div", { className: "container", children: /* @__PURE__ */ jsxDEV7("div", { style: { maxWidth: "800px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxDEV7("h1", { className: "section-title", children: "About Me" }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { style: { display: "grid", gap: "3rem", marginBottom: "3rem" }, children: /* @__PURE__ */ jsxDEV7("div", { style: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: "2rem", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxDEV7(
        "img",
        {
          src: data.profileImage,
          alt: "Profile",
          style: {
            width: "100%",
            borderRadius: "1rem",
            aspectRatio: "1/1",
            objectFit: "cover"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 51,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV7("div", { children: [
        /* @__PURE__ */ jsxDEV7("h2", { style: { fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }, children: [
          "Hi, I'm ",
          data.name
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { style: { color: "var(--text-secondary)", fontSize: "1.125rem", lineHeight: "1.7" }, children: data.bio }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 65,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/about.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "grid grid-2", style: { marginBottom: "3rem" }, children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV7("h3", { style: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }, children: "My Background" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { style: { color: "var(--text-secondary)", lineHeight: "1.7" }, children: data.background }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "card", children: [
        /* @__PURE__ */ jsxDEV7("h3", { style: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }, children: "My Approach" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { style: { color: "var(--text-secondary)", lineHeight: "1.7" }, children: data.approach }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 82,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "card", style: { marginBottom: "3rem" }, children: [
      /* @__PURE__ */ jsxDEV7("h3", { style: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "2rem" }, children: "Experience & Education" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 93,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { style: { display: "grid", gap: "2rem" }, children: data.experience.map((exp, index) => /* @__PURE__ */ jsxDEV7("div", { style: { display: "grid", gridTemplateColumns: "150px 1fr", gap: "1rem" }, children: [
        /* @__PURE__ */ jsxDEV7("div", { style: { color: "var(--primary-color)", fontWeight: "600" }, children: exp.period }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 100,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { children: [
          /* @__PURE__ */ jsxDEV7("h4", { style: { fontWeight: "600", marginBottom: "0.5rem" }, children: exp.title }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 104,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { style: { color: "var(--text-secondary)" }, children: exp.description }, void 0, !1, {
            fileName: "app/routes/about.tsx",
            lineNumber: 107,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this)
      ] }, index, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 99,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV7("div", { className: "card", children: [
      /* @__PURE__ */ jsxDEV7("h3", { style: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }, children: "Let's Work Together" }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { style: { color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "1.5rem" }, children: "I'm always interested in new challenges and opportunities to create meaningful digital experiences. Whether you need UX design, development, or a combination of both, let's discuss how we can bring your ideas to life." }, void 0, !1, {
        fileName: "app/routes/about.tsx",
        lineNumber: 120,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { style: { display: "flex", gap: "1rem", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ jsxDEV7("a", { href: `mailto:${data.email}`, className: "btn btn-primary", children: "Get In Touch" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 126,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV7("a", { href: data.resumeUrl, className: "btn btn-secondary", target: "_blank", children: "View Resume" }, void 0, !1, {
          fileName: "app/routes/about.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about.tsx",
        lineNumber: 125,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about.tsx",
      lineNumber: 116,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about.tsx",
    lineNumber: 46,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-QBSKYU7S.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-N43YSEO4.js", "/build/_shared/chunk-ZN2FQCRR.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Y72SBTG7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YWYVYPYX.js", imports: ["/build/_shared/chunk-Q77QT52M.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-T6C65K7J.js", imports: ["/build/_shared/chunk-Q77QT52M.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog.$id": { id: "routes/blog.$id", parentId: "root", path: "blog/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/blog.$id-23AQLA6V.js", imports: ["/build/_shared/chunk-Q77QT52M.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blog._index": { id: "routes/blog._index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog._index-HOQ3RLWX.js", imports: ["/build/_shared/chunk-Q77QT52M.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "df64e469", hmr: { runtime: "/build/_shared/chunk-ZN2FQCRR.js", timestamp: 1757543687414 }, url: "/build/manifest-DF64E469.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog._index": {
    id: "routes/blog._index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_index_exports
  },
  "routes/blog.$id": {
    id: "routes/blog.$id",
    parentId: "root",
    path: "blog/:id",
    index: void 0,
    caseSensitive: void 0,
    module: blog_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
