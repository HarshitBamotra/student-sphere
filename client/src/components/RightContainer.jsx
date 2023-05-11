import React from "react";
import './RightContainer.css';
import MakePost from "./MakePost";
import { useState,useEffect } from "react";
function RightContainer(){

    
    const [id,setId] = useState("");
    const [userDetail, setUserDetail] = useState({});
    useEffect(()=>{
        let parsedData ={}
        async function fetchData(){
            var url = "http://localhost:5000/userDetail";
            const data = await fetch(url);
            parsedData = await data.json();
            setId(parsedData.userDetail._id);
            setUserDetail(parsedData.userDetail);
        }
        fetchData();
        while(!parsedData.userDetail){
            fetchData();
        }
    },[]);


    return(
        <div className="rightContainer">
            <MakePost userId={id} userDetail={userDetail}></MakePost>
        </div>
    )
}

export default RightContainer;