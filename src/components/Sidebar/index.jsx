import {useAuth} from "../../hooks/useAuth";
import {NavLink} from "../NavLink";
import {Routing} from "../../routing";
import {useClasses} from "../../hooks/useClasses";
import React from "react";
import {useSettings} from "../../hooks/useSettings";

export const Sidebar = () => {

    const statuses = {
        open: 'open',
        closed: ''
    }

    const {routes, getRoute} = Routing();
    const {user, logout} = useAuth();
    const {settings} = useSettings();
    const [classList, classHandler] = useClasses("sidebar");
    const settingsRoute = getRoute('settings');

    function toggleSidebarOpen() {
        classHandler.has(statuses.open) ? classHandler.remove(statuses.open) : classHandler.add(statuses.open);
    }

    function closeSidebar() {
        if (settings.keepSidebarOpen) return;
        classHandler.reset();
    }

    //Route HTML
    const homeRoutes = (
        <>
            {routes.homeLayout.map((route) =>
                (route.name !== settingsRoute.name &&
                    <NavLink
                        to={route.path}
                        text={route.name}
                        icon={route.icon}
                        onClick={closeSidebar}
                        key={route.name}
                    />)
            )}
        </>
    );
    const protectedRoutes = (
        <>
            {routes.protectedLayout.map((route) =>
                (route.name !== settingsRoute.name &&
                    <NavLink
                        to={route.path}
                        text={route.name}
                        icon={route.icon}
                        onClick={closeSidebar}
                        key={route.name}
                    />)
            )}
            <NavLink
                to={"/"}
                text={"Logout"}
                icon={<i className="bi bi-box-arrow-in-right"/>}
                onClick={() => {
                    closeSidebar();
                    logout();
                }}
                key={"logout"}
            />
        </>
    );

    let currentRoutes = user ? protectedRoutes : homeRoutes;

    return (
        <aside className={classList}>

            <button onClick={toggleSidebarOpen} className="toggle">
                <p>Navigate</p>
                <span aria-label={'toggle'}/>
            </button>
            <nav>
                {currentRoutes}
            </nav>
            <footer>
                <NavLink
                    to={settingsRoute.path}
                    text={settingsRoute.name}
                    icon={settingsRoute.icon}
                    onClick={closeSidebar}
                    key={settingsRoute.name}
                />
            </footer>
        </aside>
    );
};
