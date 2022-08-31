import {useAuth} from "../../hooks/useAuth";
import {useEffect, useState} from "react";
import {useRoutes} from "../../hooks/useRoutes";
import {NavLink} from "../NavLink";

export const Sidebar = () => {

    const statuses = {
        open: ' open',
        closed: ''
    }

    const {routes, getRouteByPath} = useRoutes();
    const {user, logout} = useAuth();
    const [sidebarStatus, setSidebarStatus] = useState(statuses.closed);

    useEffect(() => {
        console.log(getRouteByPath());
    }, [getRouteByPath()]);

    //Route HTML
    const homeRoutes = routes.homeLayout.map((route) =>
        <NavLink
            to={route.path}
            text={route.name}
            icon={route.icon}
            onClick={closeSidebar}
            key={route.name}
        />
    );
    const protectedRoutes = (
        <>
            {routes.protectedLayout.map((route) =>
                <NavLink
                    to={route.path}
                    text={route.name}
                    icon={route.icon}
                    onClick={closeSidebar}
                    key={route.name}
                />
            )}
            <NavLink
                to={"/"}
                text={"Logout"}
                icon={<i className="bi bi-box-arrow-in-right"></i>}
                onClick={() => {
                    closeSidebar();
                    logout();
                }}
                key={"logout"}
            />
        </>
    );
    // --!--
    let currentRoutes = user ? protectedRoutes : homeRoutes;

    function toggleSidebarOpen() {
        setSidebarStatus(sidebarStatus === statuses.closed ? statuses.open : statuses.closed);
    }

    function closeSidebar() {
        if (sidebarStatus === statuses.open) {
            setSidebarStatus(statuses.closed);
        }
    }

    return (
        <aside className={'sidebar' + sidebarStatus}>

            <button onClick={toggleSidebarOpen} className="toggle">
                <p>Navigate</p>
                <span aria-label={'toggle'}></span>
            </button>
            <nav>
                {currentRoutes}
            </nav>
        </aside>
    );
};
