import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { useAuth } from '@/contexts/AuthContext';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link
              to="/"
              className="nav-link"
              activeProps={{ className: 'active' }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              activeProps={{ className: 'active' }}
            >
              About
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link
                to="/profile"
                className="nav-link"
                activeProps={{ className: 'active' }}
              >
                Profile
              </Link>
            </li>
          )}
        </ul>
        <div className="auth-status">
          {isAuthenticated ? (
            <button onClick={() => logout()}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
