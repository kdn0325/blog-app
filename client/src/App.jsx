import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Resister from "./pages/register/Register";
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  const currentUser =false;
  return (
     <BrowserRouter>
        <TopBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/register" element={currentUser ? <Home/> : <Resister/>}/>
            <Route path="/login" element={currentUser ? <Home/> : <Login/>}/>
            <Route path="/write" element={currentUser ? <Write/> : <Resister/>}/>
            <Route path="/settings" element={currentUser ? <Settings/> :<Resister/>}/>
            <Route path="/post/:id" element={<Single/>}/>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
