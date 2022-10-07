import {useAuth} from "../../hooks/useAuth";
import {NavLink} from "../NavLink";
import {Switch} from "../Switch";
import {useSessionStorage} from "../../hooks/useSessionStorage";
import {Routing} from "../../routing";
import {useClasses} from "../../hooks/useClasses";

export const Sidebar = () => {

    const statuses = {
        open: 'open',
        closed: ''
    }

    const {routes} = Routing();
    const {user, logout} = useAuth();
    const [keepOpen, setKeepOpen] = useSessionStorage("switchKeepOpen", false);
    const [classList, classHandler] = useClasses("sidebar");

    function toggleSidebarOpen() {
        classHandler.has(statuses.open) ? classHandler.remove(statuses.open) : classHandler.add(statuses.open);
    }

    function closeSidebar() {
        if (keepOpen) return;
        classHandler.reset();
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
        <aside className={classList} /*className={'sidebar' + sidebarStatus}*/>

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
                    <Switch checked={keepOpen} handleChange={setKeepOpen}/>
                </label>
            </footer>
        </aside>
    );
};
