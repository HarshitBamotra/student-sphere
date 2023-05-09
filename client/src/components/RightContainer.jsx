import React from "react";
import './RightContainer.css';
import MakePost from "./MakePost";
import { useState,useEffect } from "react";
function RightContainer(){

    
    const [id,setId] = useState("");
    useEffect(()=>{
        async function fetchData(){
            var url = "http://localhost:5000/userID";
            const data = await fetch(url);
            var parsedData = await data.json();
            console.log(parsedData);
            setId(parsedData.id);
        }
        fetchData();
    },[]);


    return(
        <div className="rightContainer">
            <MakePost userId={id}></MakePost>
        </div>
    )
}

export default RightContainer;