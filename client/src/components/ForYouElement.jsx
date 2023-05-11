import React from "react";
import './ForYouElement.css';
// import pfp from '../images/icons8-user-64.png'
// import testPfp from '../images/Untitled.jpg'
// import testImage from '../images/pexels-todd-trapani-1535162.jpg'
// import testImage2 from '../images/background.jpg'
// import testImage3 from '../images/Screenshot (643).png'
import like from '../images/like.svg'
import comment from '../images/comment.svg'
import share from '../images/Share.svg'

function ForYouElement(props) {

    


    return (
        <div className="forYouElement">    {/* display flex */}
            <div className="forYouBox">
                <div className="pfp">
                    <img src={props.profilePic} alt=""></img>
                </div>
                <div className="post">    {/* display flex column */}
                    <div className="profileName">
                        <div className="name">{props.name}</div>
                        <div className="time">{props.time}</div>
                    </div>
                    <div className="content1">
                        <div className="contentText">{props.caption}</div>
                        <div className="contentImage">
                            <img src={props.postImage} alt=""></img>
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
    )
}

export default ForYouElement;