import { Navigate, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';

export default function GuestGuard() {
    const { isAuthenticated } = useAuth();

    console.log('GuestGuard check:', { isAuthenticated });

    return isAuthenticated
        ? <Navigate to="/" />
        : <Outlet />;
}