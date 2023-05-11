import React from "react";
import './RightContainer.css';
import MakePost from "./MakePost";
import { useState,useEffect } from "react";
function RightContainer(){

    
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
    if(check===-1){
        return(
            <div className="rightContainer">
                <MakePost userDetail={userDetail}></MakePost>
            </div>
        )
    }
    else{
        return <></>
    }
}

export default RightContainer;