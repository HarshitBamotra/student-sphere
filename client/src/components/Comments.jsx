import React, { useEffect, useState } from "react";
import like from '../images/like.svg'
import comment from '../images/comment.svg'
import share from '../images/Share.svg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import testPfp from '../images/Untitled.jpg';
import postImage from '../images/Screenshot (643).png';
import './Comments.css';
import image from "../images/image.svg"
import gif from "../images/gif.svg"
import emoji from "../images/emoji.svg"




function Comments(props) {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 0;
        this.style.height = (this.scrollHeight) + "px";
    }


    const [profilePic, setProfilePic] = useState("");
    const [name, setName] = useState("");
    const [caption, setCaption] = useState("");
    const [time, setTime] = useState("");
    const [postImage, setImage] = useState("");
    const [commentsArray, setCommentsArray] = useState([]);
    const [check, setCheck] = useState(0);
    const [commentBody,setCommentBody] = useState("");

    let {id} = useParams();
    console.log(id);
    useEffect(() => {
        async function fetchData() {
            var url = "http://localhost:5000/postDetails";
            const data = await fetch(url);
            var parsedData = await data.json();
            console.log(parsedData);
            setProfilePic(parsedData.postUserProfile.url);
            setCaption(parsedData.caption);
            setName(parsedData.postUsername);
            setImage(parsedData.imageName.url);
            setTime(parsedData.timestamp);
            setCommentsArray(parsedData.comments);
            if (Object.keys(parsedData).length > 0) {
                setCheck(-1);
            }
            else {
                setCheck(check + 1);
            }
        }
        fetchData();
    }, [check]);

    function onChangeComment(e){
        setCommentBody(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        const  commentObject = {
            comment: commentBody,
            username: props.userDetail.username,
            userProfile: props.userDetail.profileImage
        }
        if(commentBody.length!==0){
            axios.post("http://localhost:5000/comment", commentObject)
            .then((res) => {
                // console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            const text = document.getElementById("comment-text-area");
            text.value = "";
        }
    }
    function createComment(comment) {
        return (
            <div className="user-comment">
                <div className="user-comment-box">
                    <div className="comment-user-pfp">
                        <img src={comment.pfp.url} alt=""></img>
                    </div>
                    <div className="user-comment-content">    {/* display flex column */}
                        <div className="comment-user-profileName">
                            <div className="comment-user-name">{comment.username}</div>
                            <div className="comment-user-time">{comment.timestamp}</div>
                        </div>
                        <div className="comment-user-content1">
                            <div className="comment-user-contentText">{comment.commentBody}</div>
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
                        <img src={profilePic} alt=""></img>
                    </div>
                    <div className="user-post-content">    {/* display flex column */}
                        <div className="user-profileName">
                            <div className="user-name">{name}</div>
                            <div className="user-time">{time}</div>
                        </div>
                        <div className="user-content1">
                            <div className="user-contentText">{caption}</div>
                            <div className="user-contentImage">
                                <img src={postImage} alt=""></img>
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
                    <textarea placeholder="write your comment" id="comment-text-area" onChange={onChangeComment}></textarea>
                    <div className="image-input">
                        <div className="input-types">
                            <div className="image-upload">
                                <label for="file-input">
                                    <img src={image} alt="" className="image-icon" />
                                </label>
                                <input id="file-input" type="file" accept="image/" />
                            </div>
                            <div className="gif-upload">
                                <img src={gif} alt="" className="gif"></img>
                            </div>
                            <div className="emoji-upload">
                                <img src={emoji} alt=""></img>
                            </div>
                        </div>
                        <div className="submit-button">
                            <button type="submit" onClick={handleClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comments">
                {commentsArray.slice(0).reverse().map(createComment)}
            </div>
        </div>
    )
}

export default Comments;