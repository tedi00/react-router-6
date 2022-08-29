import {useAuth} from "../../hooks/useAuth";
// import {useRoutes} from "../../hooks/useRoutes"
import {Link} from "react-router-dom";
import {useState} from "react";
import {useRoutes} from "../../hooks/useRoutes";

export const Sidebar = () => {

    const statuses = {
        open: 'open',
        closed: ''
    }

    const {routes} = useRoutes();
    const {user, logout} = useAuth();
    const [sidebarStatus, setSidebarStatus] = useState(statuses.closed);

    //Route HTML
    const handleSubmit = (event) => {
        event.preventDefault();
        logout();
    };
    const homeRoutes = routes.homeLayout.map((route) =>
        <Link to={route.path} key={route.name} onClick={closeSidebar}>{route.name}</Link>
    );
    const protectedRoutes = (
        <>
            {routes.protectedLayout.map((route) =>
                <Link to={route.path} key={route.name} onClick={closeSidebar}>{route.name}</Link>
            )}
            <button onClick={handleSubmit}>Log out</button>
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
        <aside className={'sidebar ' + sidebarStatus}>

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