import React from 'react';
import "./Profile.css";
// import testPfp from '../images/Untitled.jpg'
function Profile(props) {
    
    console.log(props.userId);
    console.log(props.userDetail);

    
    return (
        <div className='profile'>
            <div className='topBar'>
                <div className='back'>
                    2---
                </div>
                <div className='name'>
                    {props.userDetail.firstName + " " + props.userDetail.lastName}
                </div>
            </div>
            <div className='overflow'>
                <div className='profile-section'>
                    <div className='profile-banner' style={{backgroundImage:`url(${props.userDetail.coverImage.url})`}}>
                        <div className='profile-pic'>
                            <img src={props.userDetail.profileImage.url} alt=''></img>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div className='profile-text'>
                            <div className='profile-name'>{props.userDetail.firstName + " " + props.userDetail.lastName}</div>
                            <div className='username'>{"@" + props.userDetail.username}</div>
                            <div className='date-of-joining'>{"joined " + props.userDetail.dateOfJoining}</div>
                        </div>
                        <div className='edit-profile-container'>
                            <div className='edit-profile'>edit profile</div>
                        </div>
                    </div>
                    <div className='bio'>
                        Something is wrong. I can feel it.<br></br>
                        This world is so fucked up<br></br>
                        everyone is shit<br></br>
                    </div>
                    <div className='your-activity'>
                        <div className='your-activity-text'>Activity</div>
                        <div className='your-activity-text'>Media</div>
                        <div className='your-activity-text'>Likes</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;