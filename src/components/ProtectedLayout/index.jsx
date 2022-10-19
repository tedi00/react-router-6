import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {Sidebar} from "../Sidebar";
import React from "react";
import {useSettings} from "../../hooks/useSettings";

export const ProtectedLayout = () => {
    const {user} = useAuth();
    const {settings} = useSettings();
    let classList = "wrapper";
    if(settings.darkMode) {
        classList += " " + "theme-dark"
    }

    if (!user) {
        return <Navigate to="/"/>;
    }
    else
    return (
        <div className={classList}>
            <Sidebar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
};
