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

    function createComment() {
        return (
            <div className="user-comment">
                <div className="user-comment-box">
                    <div className="comment-user-pfp">
                        <img src={props.profilePic} alt=""></img>
                    </div>
                    <div className="user-comment-content">    {/* display flex column */}
                        <div className="comment-user-profileName">
                            <div className="comment-user-name">{props.name}</div>
                            <div className="comment-user-time">{props.time}</div>
                        </div>
                        <div className="comment-user-content1">
                            <div className="comment-user-contentText">{props.caption}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="comment-section">
            <div className="user-post">
                <div className="user-post-box">
                    <div className="post-user-pfp">
                        <img src={props.profilePic} alt=""></img>
                    </div>
                    <div className="user-post-content">    {/* display flex column */}
                        <div className="user-profileName">
                            <div className="user-name">{props.name}</div>
                            <div className="user-time">{props.time}</div>
                        </div>
                        <div className="user-content1">
                            <div className="user-contentText">{props.caption}</div>
                            <div className="user-contentImage">
                                <img src={props.postImage} alt=""></img>
                            </div>
                        </div>
                        <div className="likeAndShare">    {/* display flex */}
                            <div className="like-icon">
                                <img src={like} alt=""></img>
                            </div>
                            <div className="comment-icon">
                                <img src={comment} alt=""></img>
                            </div>
                            <div className="share-icon">
                                <img src={share} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-input">
                <div className="comment-box">
                    <textarea placeholder="write your comment"></textarea>
                </div>
            </div>
            <div className="comments">

            </div>
        </div>
    )
}

export default Comments;