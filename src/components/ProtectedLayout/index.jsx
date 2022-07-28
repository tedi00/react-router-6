import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {Sidebar} from "../Sidebar";

export const ProtectedLayout = () => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/"/>;
    }

    return (
        <div className={'wrapper'}>
            <Sidebar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
};