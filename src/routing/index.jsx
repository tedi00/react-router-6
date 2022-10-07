import {useLocation} from "react-router-dom"

export const Routing = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const routes = {
        protectedLayout: [
            {path: "/dashboard/profile", name: "Profile", icon: (<i className="bi bi-person"></i>)}
        ],
        homeLayout: [
            {path: "/", name: "Home", icon: (<i className="bi bi-house"></i>)},
            {path: "/maps", name: "Maps", icon: (<i className="bi bi-map"></i>)},
            {path: "/deities", name: "Deities", icon: (<i className="bi bi-stars"></i>)},
            {path: "/login", name: "Login", icon: (<i className="bi bi-box-arrow-in-left"></i>)}
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
