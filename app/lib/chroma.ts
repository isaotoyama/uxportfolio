// Static data implementation without Chroma DB
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { loadProjects as loadStoredProjects, loadBlogPosts as loadStoredBlogPosts, loadAboutData } from './storage';

const DATA_DIR = path.join(process.cwd(), 'data');

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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string;
}

// Static projects data
const staticProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A modern, responsive e-commerce platform built with React and Node.js",
    technology: "React, Node.js, MongoDB, Stripe",
    category: "Web Development",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    fullDescription: "This comprehensive e-commerce platform was designed to provide a seamless shopping experience for both customers and administrators. Built with modern web technologies, it features a responsive design that works perfectly across all devices.\n\nThe platform includes advanced features like real-time inventory management, secure payment processing through Stripe, and an intuitive admin dashboard for managing products, orders, and customer data.",
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
    fullDescription: "A cutting-edge mobile banking application that prioritizes security and user experience. The app provides comprehensive banking services including account management, transfers, bill payments, and investment tracking.\n\nBuilt with React Native for cross-platform compatibility, the app features biometric authentication, real-time transaction notifications, and integration with multiple financial institutions through the Plaid API.",
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
    fullDescription: "An advanced analytics dashboard that leverages machine learning to provide actionable insights from complex datasets. The platform processes millions of data points in real-time and presents them through intuitive visualizations.\n\nBuilt with Python and TensorFlow for the ML pipeline, D3.js for interactive visualizations, and PostgreSQL for data storage. The dashboard serves multiple business units with customizable views and automated reporting.",
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
];

// Static blog posts data
const staticBlogPosts: BlogPost[] = [
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
];

// Mock functions to replace Chroma functionality
export async function getProjects(limit?: number): Promise<Project[]> {
  // Try to load from storage first
  const storedProjects = await loadStoredProjects();
  if (storedProjects.length > 0) {
    return limit ? storedProjects.slice(0, limit) : storedProjects;
  }
  
  // Fallback to static data
  return limit ? staticProjects.slice(0, limit) : staticProjects;
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  // Try to load from storage first
  const storedPosts = await loadStoredBlogPosts();
  if (storedPosts.length > 0) {
    return limit ? storedPosts.slice(0, limit) : storedPosts;
  }
  
  // Fallback to static data
  return limit ? staticBlogPosts.slice(0, limit) : staticBlogPosts;
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  // Try to load from storage first
  const storedPosts = await loadStoredBlogPosts();
  const storedPost = storedPosts.find(post => post.id === id);
  if (storedPost) {
    return storedPost;
  }
  
  // Fallback to static data
  return staticBlogPosts.find(post => post.id === id) || null;
}

export async function getProject(id: string): Promise<Project | null> {
  // Try to load from storage first
  const storedProjects = await loadStoredProjects();
  const storedProject = storedProjects.find(project => project.id === id);
  if (storedProject) {
    return storedProject;
  }
  
  // Fallback to static data
  return staticProjects.find(project => project.id === id) || null;
}

// No-op functions for compatibility
export async function initializeCollections() {
  console.log("Using static data instead of Chroma DB");
}

export async function seedInitialData() {
  console.log("Static data already available");
}