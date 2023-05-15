import React from "react";
import like from "../images/like.svg"
import comment from "../images/comment.svg"
import share from "../images/Share.svg"
import testpfp from "../images/Untitled.jpg"
import test from "../images/Screenshot (643).png";
import deleteWhite from "../images/delete-white.png";
import deleteRed from "../images/delete-red.png";
import "./Activity.css";
function Activity(props){
    function changeIconRed(){
        document.getElementById("delete-white-icon").style.display="none";
        document.getElementById("delete-red-icon").style.display="block";
    }
    function changeIconWhite(){
        document.getElementById("delete-white-icon").style.display="block";
        document.getElementById("delete-red-icon").style.display="none";
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
                            <div className="activity-delete" onMouseOver={changeIconRed} onMouseLeave={changeIconWhite}>
                                <img src={deleteWhite} alt="" id="delete-white-icon"></img>
                                <img src={deleteRed} alt="" id="delete-red-icon" style={{display:"none"}}></img>
                            </div>
                        </div>
                    </div>
                    <div className="activity-content1">
                        <div className="activity-contentText">
                            {props.caption}
                        </div>
                        <div className="activity-contentImage">
                            <img src={props.postImage} alt=""></img>
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