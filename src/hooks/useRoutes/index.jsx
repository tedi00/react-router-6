import {useLocation} from "react-router-dom"
import {useMemo} from "react";

export const useRoutes = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const routes = {
        protectedLayout: [
            {path: "/dashboard/profile", name: "Profile"}
        ],
        homeLayout: [
            {path: "/", name: "Home"},
            {path: "/login", name: "Login"}
        ]
    }

    const getRoute = (name) => {
        if (!name) {
            return pathname;
        }
        return routes.protectedLayout.find(route => route.name.toLowerCase() === name.toLowerCase()) ||
            routes.homeLayout.find(route => route.name.toLowerCase() === name.toLowerCase());
    }

    return useMemo(
        () => ({
            routes,
            getRoute
        }),
        [location]
    );
}