import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {Sidebar} from "../Sidebar";
import React from "react";

export const ProtectedLayout = () => {
    const {user} = useAuth();

    if (!user) {
        return <Navigate to="/"/>;
    }
    else
    return (
        <div className={'wrapper'}>
            <Sidebar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
};
