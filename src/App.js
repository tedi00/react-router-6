import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './theme/styles.css';
import './App.css';
import {HomeLayout} from "./components/HomeLayout";
import {ProtectedLayout} from "./components/ProtectedLayout";
import Home from './screens/Home'
import {Login} from "./screens/Login";
import {Profile} from "./screens/Profile";
import {Maps} from "./screens/Maps";
import {Npcs} from "./screens/Npcs";

function App() {
    return (
        <Routes>
            <Route element={<HomeLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/maps" element={<Maps/>}/>
                <Route path="/npcs" element={<Npcs/>}/>
                <Route path="/login" element={<Login/>}/>
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout/>}>
                <Route path="profile" element={<Profile/>}/>
            </Route>
        </Routes>
    );
}

export default App;
