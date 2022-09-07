import {useAuth} from "../../hooks/useAuth";
import {useState} from "react";
import {useRoutes} from "../../hooks/useRoutes";
import {NavLink} from "../NavLink";
import {Switch} from "../Switch";
import {useSessionStorage} from "../../hooks/useSessionStorage";

export const Sidebar = () => {

    const statuses = {
        open: ' open',
        closed: ''
    }

    const {routes} = useRoutes();
    const {user, logout} = useAuth();
    const [sidebarStatus, setSidebarStatus] = useState(statuses.closed);
    const [keepOpen, setKeepOpen] = useSessionStorage("switchKeepOpen", false);

    function toggleSidebarOpen() {
        setSidebarStatus(sidebarStatus === statuses.closed ? statuses.open : statuses.closed);
    }

    function closeSidebar() {
        if(keepOpen) return;
        if (sidebarStatus === statuses.open) {
            setSidebarStatus(statuses.closed);
        }
    }

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

    return (
        <aside className={'sidebar' + sidebarStatus}>

            <button onClick={toggleSidebarOpen} className="toggle">
                <p>Navigate</p>
                <span aria-label={'toggle'}></span>
            </button>
            <nav>
                {currentRoutes}
            </nav>
            <footer>
                <label className="d-flex flex-wrap align-items-center justify-content-between">
                    <span>Keep the sidebar open</span>
                    <Switch checked={keepOpen} handleChange={setKeepOpen} />
                </label>
            </footer>
        </aside>
    );
};
