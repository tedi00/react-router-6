import {Link, Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

export const HomeLayout = () => {

    const { user } = useAuth();

    if (user) {
        return <Navigate to="/dashboard/profile" replace />;
    }

    return (
        <div>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Outlet />
            </div>
        </div>
    );
};
