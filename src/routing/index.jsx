import {useLocation} from "react-router-dom"
import React from "react";

export const Routing = () => {
    const location = useLocation();
    const pathname = location.pathname;

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

    const getRoute = (name) => {
        return routes.protectedLayout.find(route => route.name.toLowerCase() === name.toLowerCase()) ||
            routes.homeLayout.find(route => route.name.toLowerCase() === name.toLowerCase());
    }
    const getRouteByPath = (path) => {
        if (!path) {
            return pathname;
        }
        return routes.protectedLayout.find(route => route.path.toLowerCase() === path.toLowerCase()) ||
            routes.homeLayout.find(route => route.path.toLowerCase() === path.toLowerCase());
    }

    return {routes, getRoute, getRouteByPath}
}
