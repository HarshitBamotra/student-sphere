import React from "react";
import like from "../images/like.svg"
import comment from "../images/comment.svg"
import share from "../images/Share.svg"
import testpfp from "../images/Untitled.jpg"
import test from "../images/Screenshot (643).png";
import deleteWhite from "../images/delete-white.png";
import deleteRed from "../images/delete-red.png";
import "./Activity.css";
import axios from "axios";
function Activity(props){

    async function deletePost(){
        const postObject={
            id:props._id,
            username:props.username
        }
        axios.post("http://localhost:5000/deletePost",postObject)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    }



    return(
        <>
        <div className="activity-forYouElement">    {/* display flex */}
            <div className="activity-forYouBox">
                <div className="activity-pfp">
                    <img src={props.pfp} alt=""></img>
                </div>
                <div className="activity-post">    {/* display flex column */}
                    <div className="activity-profileName">
                        <div className="activity-profileName-name">
                            <div className="activity-name">{props.username}</div>
                            <div className="activity-time">{props.timestamp}</div>
                        </div>
                        <div className="activity-delete-container">
                            <div className="activity-delete" onClick={deletePost}>
                                <img src={deleteWhite} alt="" id="delete-red-icon"></img>
                            </div>
                        </div>
                    </div>
                    <div className="activity-content1">
                        <div className="activity-contentText">
                            {props.caption}
                        </div>
                        <div className="activity-contentImage">
                            {/* <img src={props.postImage} alt="" ></img> */}
                            {props.postImage?<img src={props.postImage} alt=""></img>:<></>}
                        </div>
                    </div>
                    <div className="activity-likeAndShare">    {/* display flex */}
                        <div className="activity-like">
                            <img src={like} alt=""></img>
                        </div>
                        <div className="activity-comment">
                            <img src={comment} alt=""></img>
                        </div>
                        <div className="activity-share">
                            <img src={share} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Activity;