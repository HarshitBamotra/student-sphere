import React, { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";
import './MiddleContainer.css';
import News from "./News";
import ForYou from "./ForYou";
import Profile from "./Profile";
// import Explore from "./Explore";
import { useLocation } from 'react-router-dom'
function MiddleContainer() {

    // useEffect(()=>{
    //         function HeaderView() {
    //         const location = useLocation();
    //         console.log(location.pathname);
    //         }
    //         HeaderView();
    // })
    
    const [id,setId] = useState("");
    useEffect(()=>{
        async function fetchData(){
            var url = "http://localhost:5000/userID";
            const data = await fetch(url);
            var parsedData = await data.json();
            console.log(parsedData);
            setId(parsedData.userDetail._id);
            console.log(parsedData.userDetail._id);
        }
        fetchData();
    },[]);

    const location = useLocation();
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
                    {/* <Route path={"/"} element={<Profile userId={id}></Profile>}></Route> */}
                    <Route path={"/profile/:id"} element={<Profile userId={id}></Profile>}></Route>
                    <Route path={"/profile/"} element={<Profile userId={id}></Profile>}></Route>
                    <Route path="/explore/news" element={<News userId={id}></News>}></Route>
                    <Route path="/explore/forYou" element={<ForYou userId={id}></ForYou>}></Route>
                </Routes>
        </div>
    )
}

export default MiddleContainer;