import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './theme/styles.css'
import Home from './screens/Home'
import {HomeLayout} from "./components/HomeLayout";

function App() {
  return (
      <Routes>
          <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              {/*<Route path="/login" element={<Login />} />*/}
          </Route>

          {/*<Route path="/dashboard" element={<ProtectedLayout />}>*/}
          {/*    <Route path="profile" element={<Profile />} />*/}
          {/*</Route>*/}
      </Routes>
  );
}

export default App;
