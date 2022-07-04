import {Routes, Route} from "react-router-dom";
import './theme/styles.css';
import './App.css';
import Home from './screens/Home'
import {Login} from "./screens/Login";
import {ProtectedLayout} from "./components/ProtectedLayout";
import {HomeLayout} from "./components/HomeLayout";
import {Profile} from "./screens/Profile";

function App() {
    return (
        <Routes>
            <Route element={<HomeLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout/>}>
                <Route path="profile" element={<Profile/>}/>
            </Route>
        </Routes>
    );
}

export default App;
