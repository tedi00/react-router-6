import {Routing} from "./index";
import {useLocation} from "react-router-dom";

export const RoutingHelpers = () => {
    const {routes} = Routing();
    const location = useLocation();
    const pathname = location.pathname;

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

    return {getRoute, getRouteByPath}
}