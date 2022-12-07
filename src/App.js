import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './theme/styles.css';
import {HomeLayout} from "./components/HomeLayout";
import {ProtectedLayout} from "./components/ProtectedLayout";
import Home from './screens/Home'
import {Profile} from "./screens/Profile";
import {Settings} from "./screens/Settings";
import React from "react";

function App() {
    return (
        <Routes>
            <Route element={<HomeLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout/>}>
                <Route path="profile" element={<Profile/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route>
        </Routes>
    );
}

export default App;
