import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Nav from './Nav';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = useAuthStore((s) => s.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Nav />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}
