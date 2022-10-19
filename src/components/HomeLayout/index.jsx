import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import {Sidebar} from "../Sidebar";
import React from "react";
import {useSettings} from "../../hooks/useSettings";

export const HomeLayout = () => {

    const {user} = useAuth();
    const {settings} = useSettings();
    let classList = "wrapper";
    if(settings.darkMode) {
        classList += " " + "theme-dark";
    }

    if (user) {
        return <Navigate to="/dashboard/profile" replace/>;
    }
    else
    return (
        <div className={classList}>
            <Sidebar/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
};
