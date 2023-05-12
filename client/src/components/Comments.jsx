import React, { useState } from "react";
import like from '../images/like.svg'
import comment from '../images/comment.svg'
import share from '../images/Share.svg'
// import { useParams } from 'react-router-dom'
// import axios from "axios";
import testPfp from '../images/Untitled.jpg';
import postImage from '../images/Screenshot (643).png';
import './Comments.css';
import image from "../images/image.svg"
import gif from "../images/gif.svg"
import emoji from "../images/emoji.svg"
function Comments(props) {

    function autoGrow() {
        let text = document.getElementById("comment-text-area");
        if (text.scrollHeight > text.clientHeight) {
            text.style.height = text.scrollHeight + "px";
        }
    }
    // let { postId } = useParams();
    // const [profilePic, setProfilePic] = useState("");
    // const [name, setName] = useState("");
    // const [caption, setCaption] = useState("");
    // const [time, setTime] = useState("");
    // const [image, setImage] = useState("");

    // axios.post("http://localhost5000/postDetails", postId)
    //     .then((res) => {
    //         setCaption(res.caption);
    //         setName(res.username);
    //         setTime(res.timestamp);
    //         setProfilePic(res.postUserProfile.url);
    //         setImage(res.imageName.url);
    //     }).catch((error) => {
    //         console.log(error);
    //     })

    function createComment() {
        return (
            <div className="user-comment">
                <div className="user-comment-box">
                    <div className="comment-user-pfp">
                        <img src={testPfp} alt=""></img>
                    </div>
                    <div className="user-comment-content">    {/* display flex column */}
                        <div className="comment-user-profileName">
                            <div className="comment-user-name">Nirbhay Singh</div>
                            <div className="comment-user-time">6:90</div>
                        </div>
                        <div className="comment-user-content1">
                            <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
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
                        <img src={testPfp} alt=""></img>
                    </div>
                    <div className="user-post-content">    {/* display flex column */}
                        <div className="user-profileName">
                            <div className="user-name">Harshit Bamotra</div>
                            <div className="user-time">10:20</div>
                        </div>
                        <div className="user-content1">
                            <div className="user-contentText">Something is wrong I can feel it. This is going to be a pretty long title</div>
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
                    <textarea placeholder="write your comment" onKeyUp={autoGrow} id="comment-text-area"></textarea>
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
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="comments">
                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-comment">
                    <div className="user-comment-box">
                        <div className="comment-user-pfp">
                            <img src={testPfp} alt=""></img>
                        </div>
                        <div className="user-comment-content">    {/* display flex column */}
                            <div className="comment-user-profileName">
                                <div className="comment-user-name">Nirbhay Singh</div>
                                <div className="comment-user-time">6:90</div>
                            </div>
                            <div className="comment-user-content1">
                                <div className="comment-user-contentText">This is a comment. suck it motherfuckers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;