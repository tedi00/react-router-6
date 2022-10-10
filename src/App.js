import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './theme/styles.css';
import {HomeLayout} from "./components/HomeLayout";
import {ProtectedLayout} from "./components/ProtectedLayout";
import Home from './screens/Home'
import {Login} from "./screens/Login";
import {Profile} from "./screens/Profile";
import {Maps} from "./screens/Maps";
import {Deities} from "./screens/Deities";
import {Settings} from "./screens/Settings";
import React from "react";

function App() {
    return (
        <Routes>
            <Route element={<HomeLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/deities" element={<Deities/>}/>
                <Route path="/login" element={<Login/>}/>
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
