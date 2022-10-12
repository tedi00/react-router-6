import React from "react";

export const Routing = () => {

    const routes = {
        protectedLayout: [
            {path: "/dashboard/profile", name: "Profile", icon: (<i className="bi bi-person"/>)},
            {path: "/settings", name: "Settings", icon: (<i className="bi bi-gear"/>)}
        ],
        homeLayout: [
            {path: "/", name: "Home", icon: (<i className="bi bi-house"/>)},
            {path: "/maps", name: "Maps", icon: (<i className="bi bi-map"/>)},
            {path: "/deities", name: "Deities", icon: (<i className="bi bi-stars"/>)},
            {path: "/login", name: "Login", icon: (<i className="bi bi-box-arrow-in-left"/>)},
            {path: "/settings", name: "Settings", icon: (<i className="bi bi-gear"/>)}
        ]
    }

    return {routes}
}
