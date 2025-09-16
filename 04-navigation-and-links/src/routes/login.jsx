import { useAuth } from '@/contexts/AuthContext';
import { createFileRoute, Navigate, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: LoginComponent,
});

function LoginComponent() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  const handleLogin = () => {
    auth.login();
    navigate({ to: '/profile' });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <p>Click the button to log in.</p>
      <button onClick={handleLogin} className="btn btn-full-width">
        Login
      </button>
    </div>
  );
}
