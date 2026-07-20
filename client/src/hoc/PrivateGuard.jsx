import { Navigate, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';

export default function PrivateGuard() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />;
}