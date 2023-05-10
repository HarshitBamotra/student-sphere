import React from "react";
import MainContent from "./MainContent";
// import SideBar from "./SideBar";
import Sidebar from "./Sidebar";
import './App.css'
import { Routes,Route, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import Register from "./Register";
import Landing from "./Landing";

function App(){
    const location = useLocation();
    let res1 = location.pathname.includes("login");
    let res2 = location.pathname.includes("register");
    // let res3 = location.pathname === "/";
    let res = res1 || res2;
    return(
        <>
        {/* <SideBar></SideBar> */}
        {
                res ? <Routes>
                <Route path={"/login"} element={<LoginPage></LoginPage>}></Route>
                <Route path={"/register"} element={<Register></Register>}></Route>
                {/* <Route path={"/"} element={<Landing></Landing>}></Route> */}
            </Routes> :
                <div className="entire-screen">
                    <Sidebar></Sidebar>
                    <MainContent></MainContent>
                </div>
            }
            {/* <div className="entire-screen">
                <Sidebar></Sidebar>
                <MainContent></MainContent>
            </div>
            <Routes>
                <Route path={"/login"} element={<LoginPage></LoginPage>}></Route>
                <Route path={"/register"} element={<Register></Register>}></Route>
            </Routes> */}
        </>
    )
}

export default App;
