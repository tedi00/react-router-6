import {Routes, Route} from "react-router-dom";
import './theme/styles.css';
import './theme/base.css';
import Home from './screens/Home'
import {HomeLayout} from "./components/HomeLayout";

function App() {
    return (
        <Routes>
            <Route element={<HomeLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
