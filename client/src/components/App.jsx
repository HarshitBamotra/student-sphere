import React from "react";
import MainContent from "./MainContent";
// import SideBar from "./SideBar";
import Sidebar from "./Sidebar";
import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Register from "./Register";

function App(){
    return(
        
        <BrowserRouter>
            {/* <SideBar></SideBar> */}
            {/* <div className="entire-screen">
                <Sidebar></Sidebar>
                <MainContent></MainContent>
            </div> */}
            <Routes>
                <Route path={"/login"} element={<LoginPage></LoginPage>}></Route>
                <Route path={"/register"} element={<Register></Register>}></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App;
