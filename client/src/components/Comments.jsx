import React, { useState } from "react";
import like from '../images/like.svg'
import comment from '../images/comment.svg'
import share from '../images/Share.svg'
import { useParams } from 'react-router-dom'
import axios from "axios";

function Comments(props) {

    let { postId } = useParams();
    const [profilePic, setProfilePic] = useState("");
    const [name, setName] = useState("");
    const [caption, setCaption] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");

    axios.post("http://localhost5000/postDetails", postId)
        .then((res) => {
            setCaption(res.caption);
            setName(res.username);
            setTime(res.timestamp);
            setProfilePic(res.postUserProfile.url);
            setImage(res.imageName.url);
        }).catch((error) => {
            console.log(error);
    })
    return (
        <>
            <div className="forYouElement">    {/* display flex */}
                <div className="forYouBox">
                    <div className="pfp">
                        <img src={profilePic} alt=""></img>
                    </div>
                    <div className="post">    {/* display flex column */}
                        <div className="profileName">
                            <div className="name">{name}</div>
                            <div className="time">{time}</div>
                        </div>
                        <div className="content1">
                            <div className="contentText">{caption}</div>
                            <div className="contentImage">
                                <img src={image} alt=""></img>
                            </div>
                        </div>
                        <div className="likeAndShare">    {/* display flex */}
                            <div className="like">
                                <img src={like} alt=""></img>
                            </div>
                            <div className="comment">
                                <img src={comment} alt=""></img>
                            </div>
                            <div className="share">
                                <img src={share} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >

            </div>
        </>
    )
}

export default Comments;