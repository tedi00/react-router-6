import {useAuth} from "../../hooks/useAuth";
import {NavLink} from "../NavLink";
import {Routing} from "../../routing";
import {useClasses} from "../../hooks/useClasses";
import React from "react";
import {useSettings} from "../../hooks/useSettings";
import {RoutingHelpers} from "../../routing/routing-helpers";
import logo from "../../media/METAL ONHS 1.1.png"

export const Sidebar = () => {

    const statuses = {
        open: 'open',
        closed: ''
    }

    const {routes} = Routing();
    const {getRouteByPath} = RoutingHelpers();
    const {user, logout} = useAuth();
    const {settings} = useSettings();
    const [classList, classHandler] = useClasses("sidebar");
    const settingsRoute = (user ? getRouteByPath('/dashboard/settings') : getRouteByPath('/settings'));

    function toggleSidebarOpen() {
        classHandler.has(statuses.open) ? classHandler.remove(statuses.open) : classHandler.add(statuses.open);
    }

    function closeSidebar() {
        if (settings['keepSidebarOpen']) return;
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
        <nav className={classList}>

            {/*<button onClick={toggleSidebarOpen} className="toggle">*/}
            {/*    <p>Navigate</p>*/}
            {/*    <span aria-label={'toggle'}/>*/}
            {/*</button>*/}
            <div>
                {/*{currentRoutes}*/}
                <img height={56} src={logo} alt=""/>
            </div>
            <div>
                {/*<NavLink*/}
                {/*    to={settingsRoute.path}*/}
                {/*    text={settingsRoute.name}*/}
                {/*    icon={settingsRoute.icon}*/}
                {/*    onClick={closeSidebar}*/}
                {/*    key={settingsRoute.name}*/}
                {/*/>*/}
                <h5 style={{fontFamily: "Montserrat"}} className='text-white m-0'>OUNOHANSI - ONLY THE BEST</h5>
            </div>
        </nav>
    );
};
