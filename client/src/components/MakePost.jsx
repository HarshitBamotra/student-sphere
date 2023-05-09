import React, { useState } from "react";
import './MakePost.css';
import image from "../images/image.svg"
import gif from "../images/gif.svg"
import emoji from "../images/emoji.svg"
import testPfp from '../images/Untitled.jpg'
import x from "../images/x-mark.png";
import cross from "../images/cross.svg";
import xImage from "../images/x.png";
import axios from 'axios'

function MakePost(userId) {
    console.log("Make post=> ", userId);
    const id = userId;
    console.log(id);
    const [caption, setCaption] = useState("");
    const [postImage, setPostImage] = useState("");

    function onChangeCaption(event) {
        setCaption(event.target.value);
    }

    function handlePostImage(event) {
        const file = event.target.files[0];
        transformFile(file)
        let remove = document.getElementById("removeImage");
        remove.classList.remove("displayNone");
    }
    const transformFile = (file) => {
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                console.log(reader.result);
                setPostImage(reader.result);
            }
        }
        else {
            setPostImage("")
        }
    }
    const removeImage = () => {
        const file = document.getElementById("file-input");
        var emptyFile = document.createElement('input');
        emptyFile.type = 'file';
        file.files = emptyFile.files;
        setPostImage("");
        let remove = document.getElementById("removeImage");
        remove.classList.add("displayNone");
    }

    function handleSubmitPost(e){
        e.preventDefault();
        const postObject={
            caption:caption,
            imageName:postImage,
            postUserId:id.userId
        }
        axios.post("http://localhost:5000/imageUpload",postObject)
            .then((res)=>{
                // console.log(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }



    return (
        <div className="container">
            <div className="box">
                <div className="makepost-pic">
                    <img src={testPfp} alt=""></img>
                </div>
                <div className="makepost-input">
                    <div className="text-input">
                        <textarea placeholder="What's on your mind?" onChange={onChangeCaption}></textarea>
                    </div>
                    <div className="postImagePreview">
                        <img src={postImage} alt=""></img>
                        <div className="remove displayNone" id="removeImage" onClick={removeImage}>
                            <img src={xImage} alt="" className="remove"></img>
                        </div>
                    </div>
                    <i></i>
                    <div className="image-input">
                        <div className="input-types">
                            <div className="image-upload">
                                <label for="file-input">
                                    <img src={image} alt="" className="image-icon" />
                                </label>
                                <input id="file-input" type="file" accept="image/" onChange={handlePostImage} />
                            </div>
                            <div className="gif-upload">
                                <img src={gif} alt="" className="gif"></img>
                            </div>
                            <div className="emoji-upload">
                                <img src={emoji} alt=""></img>
                            </div>
                        </div>
                        <div className="submit-button">
                            <button type="submit" onClick={handleSubmitPost}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MakePost;