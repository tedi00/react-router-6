import { useLocation } from "react-router-dom"
import {useMemo} from "react";

export const useRoutes = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const routes = [
        {path: "/", name: "home"},
        {path: "/login", name: "login"},
        {path: "/dashboard/profile", name: "profile"}
    ]
    const getRoute = (name) => {
        return routes.find(route => route.name === name.toLowerCase()) || undefined;
    }

    const value = useMemo(
        () => ({
            location,
            routes,
            getRoute
        }),
        [location]
    );

    return value;
}