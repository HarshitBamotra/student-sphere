import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";
import './MiddleContainer.css';
import News from "./News";
import ForYou from "./ForYou";
import Profile from "./Profile";
import Explore from "./Explore";
import { useLocation } from 'react-router-dom'
function MiddleContainer() {

    // useEffect(()=>{
    //         function HeaderView() {
    //         const location = useLocation();
    //         console.log(location.pathname);
    //         }
    //         HeaderView();
    // })

    const location = useLocation();
    console.log(location);
    let result = location.pathname.includes("explore");

    return (
        <div className="middleContainer">
            {/* <NavBar /> */}
            {/* <ForYou></ForYou> */}
            {/* <News></News> */}
            {/* <Profile></Profile> */}
            {/* <NavBar></NavBar> */}
            {result ? <NavBar></NavBar> : <></>}
                <Routes>
                    <Route path={"/"} element={<Profile></Profile>}></Route>
                    <Route path={"/profile"} element={<Profile></Profile>}></Route>
                    <Route path="/explore/news" element={<News></News>}></Route>
                    <Route path="/explore/forYou" element={<ForYou></ForYou>}></Route>
                </Routes>
        </div>
    )
}

export default MiddleContainer;