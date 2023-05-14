import React, { useState } from 'react';
import "./Profile.css";
import camera from '../images/icons8-camera-50.png';
// import testPfp from '../images/Untitled.jpg'
function Profile(props) {
    
    console.log(props.userId);
    console.log(props.userDetail);


    function editProfile() {
        document.getElementById("edit-profile-popup").style.display = "flex";
        document.getElementById('name-textarea').defaultValue = `${props.userDetail.firstName + " " + props.userDetail.lastName}`;
    }
    function closePopup() {
        document.getElementById("edit-profile-popup").style.display = "none";
        document.getElementById("bio-box").style.borderColor = "#3e4144";
        document.getElementById("bio-box-div").style.color = "#3e4144";
        document.getElementById('name-box').style.borderColor = "#3e4144";
        document.getElementById('name-box-div').style.color = "#3e4144";
        const P = document.getElementById("pfp-input");
        const B = document.getElementById('banner-input');
        var emptyFile = document.createElement('input');
        emptyFile.type = 'file';
        P.files = emptyFile.files;
        B.files=emptyFile.files;
        setPfpImage("");
        setBannerImage("");
    }
    function active() {
        let nameTextArea = document.getElementById("name-textarea");
        let bioTextArea = document.getElementById("bio-textarea");
        if (document.activeElement === bioTextArea) {
            document.getElementById("bio-box").style.borderColor = "#1d9bf0";
            document.getElementById("bio-box").style.transition = "200ms";
            document.getElementById("bio-box-div").style.color = "#1d9bf0";
            document.getElementById("bio-box-div").style.transition = "200ms";
        }
        else {
            document.getElementById("bio-box").style.borderColor = "#3e4144";
            document.getElementById("bio-box-div").style.color = "#3e4144";
        }
        if (document.activeElement === nameTextArea) {
            document.getElementById('name-box').style.borderColor = "#1d9bf0";
            document.getElementById("name-box").style.transition = "200ms";
            document.getElementById('name-box-div').style.color = "#1d9bf0";
            document.getElementById("name-box-div").style.transition = "200ms";
        }
        else {
            document.getElementById('name-box').style.borderColor = "#3e4144";
            document.getElementById('name-box-div').style.color = "#3e4144";
        }
    }


    const [name,setName] = useState(`${props.userDetail.firstName + " " + props.userDetail.lastName}`);
    const [bio,setBio] = useState("This is your bio");
    const [pfpImage, setPfpImage] = useState("");
    const [bannerImage,setBannerImage] = useState("");

    function onChangeName(e){
        setName(e.target.value);
    }
    function onChangeBio(e){
        setBio(e.target.value);
    }

    function handleBannerImage(event) {
        const file = event.target.files[0];
        bannerTransformFile(file)
    }
    function handlePfpImage(event) {
        const file = event.target.files[0];
        pfpTransformFile(file)
    }
    
    const bannerTransformFile = (file) => {
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setBannerImage(reader.result);
            }
        }
        else {
            setBannerImage("")
        }
    }
    const pfpTransformFile = (file) => {
        let reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setPfpImage(reader.result);
            }
        }
        else {
            setPfpImage("")
        }
    }


    function saveProfile(){


    }





    return (
        <div className='profile'>
            <div className='edit-profile-popup-container' id='edit-profile-popup'>
                <div className='edit-profile-popup-box' onClick={active}>
                    <div className='edit-profile-header'>
                        <div className='edit-profile-cross-and-name'>
                            <div className='edit-profile-cross' onClick={closePopup}>
                                <div>
                                    X
                                </div>
                            </div>
                            <div className='edit-profile-name-header'>
                                <div>Edit profile</div>
                            </div>
                        </div>
                        <div className='edit-profile-save'>
                            <div className='edit-profile-save-container' onClick={saveProfile}>
                                <div>Save</div>
                            </div>

                        </div>
                    </div>
                    {/* backgroundImage: `url(${props.userDetail.coverImage.url})` */}
                    <div className='edit-profile-section'>
                        <div className='edit-profile-banner' style={{backgroundImage:`url(${bannerImage?bannerImage:`${props.userDetail.coverImage.url}`})`}}>
                            <div className='edit-profile-pic'>
                                <div className='edit-pfp-icon'>
                                    <div>
                                        <label for="pfp-input">
                                            <img src={camera} alt=''></img>
                                        </label>
                                        <input id='pfp-input' type='file' accept='image/' onChange={handlePfpImage}></input>
                                    </div>
                                </div>
                                <img src={pfpImage?pfpImage:props.userDetail.profileImage.url} alt='' className='edit-profile-pic-image'></img>
                            </div>
                            <div className='edit-banner-icon'>
                                <div>
                                    <label for="banner-input">
                                        <img src={camera} alt=''></img>
                                    </label>
                                    <input id='banner-input' type='file' accept='image/' onChange={handleBannerImage}></input>
                                </div>
                            </div>
                        </div>
                        <div className='edit-profile-content'>
                            <div className='edit-profile-text'>
                                <div className='edit-profile-name' id='name-box'>
                                    <div id='name-box-div'>Name</div>
                                    <textarea maxLength={40} rows={1} spellCheck="false" id='name-textarea' onChange={onChangeName}></textarea>
                                </div>
                                <div className='edit-username'>{"@" + props.userDetail.username}</div>
                                <div className='edit-date-of-joining'>{"joined " + props.userDetail.dateOfJoining}</div>
                            </div>
                        </div>
                        <div className='edit-bio'>
                            <div className='edit-bio-text'>
                                <div className='edit-bio-content' id="bio-box">
                                    <div id='bio-box-div'>Bio</div>
                                    <textarea maxLength={200} rows={4} spellCheck="false" id='bio-textarea' onChange={onChangeBio}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                    <div className='profile-banner' style={{ backgroundImage: `url(${props.userDetail.coverImage.url})` }}>
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
                            <div className='edit-profile' onClick={editProfile} role='button'>edit profile</div>
                        </div>
                    </div>
                    <div className='bio'>This is Your Bio.</div>
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