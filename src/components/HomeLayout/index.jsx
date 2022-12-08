import {Link, Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import React from "react";

export const HomeLayout = () => {

    // const { user } = useAuth();
    //
    // if (user) {
    //     return <Navigate to="/dashboard/profile" replace />;
    // }

    return (
        <>
                {/*<nav>*/}
                {/*    <Link to="/">Home</Link>*/}
                {/*    <Link to="/login">Login</Link>*/}
                {/*</nav>*/}
                <Outlet />
        </>
    );
};
