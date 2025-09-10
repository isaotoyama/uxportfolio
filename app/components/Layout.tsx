import { Link, useLocation } from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="logo">
              Portfolio
            </Link>
            <ul className="nav-links">
              <li>
                <Link to="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className={isActive("/blog")}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/admin" style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none',
                  fontSize: '0.875rem'
                }}>
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Portfolio. Built with Remix & Chroma DB.</p>
        </div>
      </footer>
    </>
  );
}