import {Link, Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

export const ProtectedLayout = () => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <nav>
                <Link to="/dashboard/profile">Profile</Link>
            </nav>
            <Outlet />
        </div>
    )
};