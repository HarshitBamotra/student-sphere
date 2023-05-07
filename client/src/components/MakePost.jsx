import React from "react";
import './MakePost.css';
import image from "../images/image.svg"
import gif from "../images/gif.svg"
import emoji from "../images/emoji.svg"
import testPfp from '../images/Untitled.jpg'

function MakePost() {
    return (
        <div className="container">
            <div className="box">
                <div className="makepost-pic">
                    <img src={testPfp} alt=""></img>
                </div>
                <div className="makepost-input">
                    <div className="text-input">
                        <textarea placeholder="What's on your mind?"></textarea>
                    </div>
                    <div className="image-input">
                        <div className="image-upload">
                            <label for="file-input">
                                <img src={image} alt="" className="image-icon"/>
                            </label>
                            <input id="file-input" type="file" />
                        </div>
                        <div className="gif-upload">
                            <img src={gif} alt="" className="gif"></img>
                        </div>
                        <div className="emoji-upload">
                            <img src={emoji} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MakePost;