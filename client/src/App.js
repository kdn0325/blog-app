import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Resister from "./pages/register/Register";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Context } from "./context/Context";
function App() {
  const {user}= useContext(Context);
  return (
     <BrowserRouter>
        <TopBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/register" element={user ? <Home/> : <Resister/>}/>
            <Route path="/login" element={user ? <Home/> : <Login/>}/>
            <Route path="/write" element={user ? <Write/> : <Resister/>}/>
            <Route path="/settings" element={user ? <Settings/> :<Resister/>}/>
            <Route path="/post/:id" element={<Single/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
