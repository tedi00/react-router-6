import {useAuth} from "../../hooks/useAuth";
// import {useCurrentPath} from "../../hooks/useCurrentPath"
import {Link} from "react-router-dom";
import {useState} from "react";

export const Sidebar = () => {

    const statuses = {
        open: 'open',
        closed: ''
    }
    const {user, logout} = useAuth();
    const [sidebarStatus, setSidebarStatus] = useState(statuses.closed);

    // const currentPath = useCurrentPath();
    // console.log(currentPath);


    const handleSubmit = (event) => {
        event.preventDefault();
        logout();
    };

    const homeRoutes = (
        <>
            <Link to="/" onClick={closeSidebar}>Home</Link>
            <Link to="/login" onClick={closeSidebar}>Login</Link>
        </>
    )
    const protectedRoutes = (
        <>
            <Link to="/dashboard/profile" onClick={closeSidebar}>Profile</Link>
            <button onClick={handleSubmit}>Log out</button>
        </>
    )
    let routes = user ? protectedRoutes : homeRoutes;

    function toggleSidebarOpen() {
        setSidebarStatus(sidebarStatus === statuses.closed ? statuses.open : statuses.closed);
    }
    function closeSidebar() {
        if(sidebarStatus === statuses.open) {
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
                {routes}
            </nav>
        </aside>
    );
};