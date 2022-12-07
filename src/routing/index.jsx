import React from "react";

export const Routing = () => {

    const routes = {
        protectedLayout: [
            {path: "/dashboard/profile", name: "Profile", icon: (<i className="bi bi-person"/>)},
            {path: "/dashboard/settings", name: "Settings", icon: (<i className="bi bi-gear"/>)}
        ],
        homeLayout: [
            {path: "/", name: "Home", icon: (<i className="bi bi-house"/>)},
            // {path: "/login", name: "Login", icon: (<i className="bi bi-box-arrow-in-left"/>)},
            {path: "/settings", name: "Settings", icon: (<i className="bi bi-gear"/>)}
        ]
    }

    return {routes}
}
