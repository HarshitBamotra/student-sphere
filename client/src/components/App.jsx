import React from "react";
import MainContent from "./MainContent";
// import SideBar from "./SideBar";
import Sidebar from "./Sidebar";
import './App.css'
import { BrowserRouter, Routes,Route, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import Register from "./Register";

function App(){
    const location = useLocation();
    console.log(location);
    let res1 = location.pathname.includes("login");
    let res2 = location.pathname.includes("register");
    let res = res1 || res2;
    console.log(res);
    return(
        <>
        {/* <SideBar></SideBar> */}
        {
                res ? <Routes>
                <Route path={"/login"} element={<LoginPage></LoginPage>}></Route>
                <Route path={"/register"} element={<Register></Register>}></Route>
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
