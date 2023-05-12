import React, { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";
import './MiddleContainer.css';
import News from "./News";
import ForYou from "./ForYou";
import Profile from "./Profile";
// import Explore from "./Explore";
import { useLocation } from 'react-router-dom'
import Comments from "./Comments";
function MiddleContainer() {

    // useEffect(()=>{
    //         function HeaderView() {
    //         const location = useLocation();
    //         console.log(location.pathname);
    //         }
    //         HeaderView();
    // })
    
    const [id,setId] = useState("");
    const [userDetail, setUserDetail] = useState({});

    const [check, setCheck] = useState(0);
    useEffect(()=>{
        async function fetchData(){
            var url = "http://localhost:5000/userDetail";
            const data = await fetch(url);
            var parsedData = await data.json();
            setId(parsedData.userDetail._id);
            setUserDetail(parsedData.userDetail);
            console.log(parsedData);
            if(Object.keys(parsedData.userDetail).length>0){
                setCheck(-1);
            }
            else{
                setCheck(check +1);
            }
        }
        fetchData();
    },[check]);

    

    const location = useLocation();
    let result = location.pathname.includes("explore");
    if(check===-1){
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
                        <Route path={"/profile/:id"} element={<Profile userId={id} userDetail={userDetail}></Profile>}></Route>
                        <Route path={"/profile/"} element={<Profile userId={id} userDetail={userDetail}></Profile>}></Route>
                        <Route path="/explore/news" element={<News userId={id}></News>}></Route>
                        <Route path="/explore/forYou" element={<ForYou userId={id}></ForYou>}></Route>
                        <Route path="/explore/" element={<ForYou userId={id}></ForYou>}></Route>
                        <Route path="/explore/forYou/:id" element={<Comments></Comments>}></Route>
                    </Routes>
            </div>
        )
    }
    else{
        return <></>
    }
    
}

export default MiddleContainer;