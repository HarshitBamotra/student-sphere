import React, { useState } from 'react';
import "./Profile.css";
import camera from '../images/icons8-camera-50.png';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Activity from './Activity';
// import testPfp from '../images/Untitled.jpg'
function Profile(props) {

    const userPosts = props.userDetail.posts;

    function editProfile() {
        document.getElementById("edit-profile-popup").style.display = "flex";
        document.getElementById('first-name-textarea').defaultValue = `${props.userDetail.firstName}`;
        document.getElementById('last-name-textarea').defaultValue = `${props.userDetail.lastName}`;
        document.getElementById('bio-textarea').defaultValue=`${props.userDetail.bio}`;
    }
    function closePopup() {
        document.getElementById("edit-profile-popup").style.display = "none";
        document.getElementById("bio-box").style.borderColor = "#3e4144";
        document.getElementById("bio-box-div").style.color = "#3e4144";
        document.getElementById('first-name-box').style.borderColor = "#3e4144";
        document.getElementById('first-name-box-div').style.color = "#3e4144";
        document.getElementById('last-name-box').style.borderColor = "#3e4144";
        document.getElementById('last-name-box-div').style.color = "#3e4144";
        const P = document.getElementById("pfp-input");
        const B = document.getElementById('banner-input');
        var emptyFile = document.createElement('input');
        emptyFile.type = 'file';
        P.files = emptyFile.files;
        B.files = emptyFile.files;
        setPfpImage("");
        setBannerImage("");
    }
    function active() {
        let firstnameTextArea = document.getElementById("first-name-textarea");
        let lastnameTextArea = document.getElementById("last-name-textarea");
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
        if (document.activeElement === lastnameTextArea) {
            document.getElementById('last-name-box').style.borderColor = "#1d9bf0";
            document.getElementById("last-name-box").style.transition = "200ms";
            document.getElementById('last-name-box-div').style.color = "#1d9bf0";
            document.getElementById("last-name-box-div").style.transition = "200ms";
        }
        else {
            document.getElementById('last-name-box').style.borderColor = "#3e4144";
            document.getElementById('last-name-box-div').style.color = "#3e4144";
        }
        if (document.activeElement === firstnameTextArea) {
            document.getElementById('first-name-box').style.borderColor = "#1d9bf0";
            document.getElementById("first-name-box").style.transition = "200ms";
            document.getElementById('first-name-box-div').style.color = "#1d9bf0";
            document.getElementById("first-name-box-div").style.transition = "200ms";
        }
        else {
            document.getElementById('first-name-box').style.borderColor = "#3e4144";
            document.getElementById('first-name-box-div').style.color = "#3e4144";
        }
    }


    const [firstName, setFirstName] = useState(`${props.userDetail.firstName}`);
    const [lastName, setLastName] = useState(`${props.userDetail.lastName}`);
    const [bio, setBio] = useState(`${props.userDetail.bio}`);
    const [pfpImage, setPfpImage] = useState("");
    const [bannerImage, setBannerImage] = useState("");

    function onChangeFirstName(e) {
        setFirstName(e.target.value);
    }
    function onChangeLastName(e) {
        setLastName(e.target.value);
    }
    function onChangeBio(e) {
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


    async function saveProfile() {
        const firstNameObject = {
            firstName: firstName,
            username: props.userDetail.username
        }
        const lastNameObject = {
            lastName: lastName,
            username: props.userDetail.username
        }
        const bioObject = {
            bio: bio,
            username: props.userDetail.username
        }
        const pfpObject = {
            profileImage: pfpImage,
            username: props.userDetail.username
        }
        const bannerObject = {
            coverImage: bannerImage,
            username: props.userDetail.username
        }
        if (firstName!== props.userDetail.firstName) {
            axios.post("http://localhost:5000/updateFirstName", firstNameObject)
                .then((res) => {
                    console.log(res.data);
                    setFirstName(res.data.firstName);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        if (lastName !== props.userDetail.lastName) {
            axios.post("http://localhost:5000/updateLastName", lastNameObject)
                .then((res) => {
                    // console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        if (bio !== props.userDetail.bio) {
            axios.post("http://localhost:5000/updateBio", bioObject)
                .then((res) => {
                    // console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        if (pfpImage) {
            axios.post("http://localhost:5000/updateProfileImage", pfpObject)
                .then((res) => {
                    // console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        if (bannerImage) {
            axios.post("http://localhost:5000/updateCover", bannerObject)
                .then((res) => {
                    // console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        const P = document.getElementById("pfp-input");
        const B = document.getElementById('banner-input');
        var emptyFile = document.createElement('input');
        emptyFile.type = 'file';
        P.files = emptyFile.files;
        B.files = emptyFile.files;
        document.getElementById("edit-profile-popup").style.display = "none";
        setPfpImage("");
        setBannerImage("");
    }



    function createActivity(post){
        return(
            <Activity key={post._id} caption={post.caption} postImage={post.imageName.url} username={post.postUsername} pfp={props.userDetail.profileImage.url} timestamp={post.timestamp} postId={props._id}></Activity>
        )
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
                        <div className='edit-profile-banner' style={{ backgroundImage: `url(${bannerImage ? bannerImage : `${props.userDetail.coverImage.url}`})` }}>
                            <div className='edit-profile-pic'>
                                <div className='edit-pfp-icon'>
                                    <div>
                                        <label for="pfp-input">
                                            <img src={camera} alt=''></img>
                                        </label>
                                        <input id='pfp-input' type='file' accept='image/' onChange={handlePfpImage}></input>
                                    </div>
                                </div>
                                <img src={pfpImage ? pfpImage : props.userDetail.profileImage.url} alt='' className='edit-profile-pic-image'></img>
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
                                <div className='edit-profile-name' id='first-name-box'>
                                    <div id='first-name-box-div'>First name</div>
                                    <textarea maxLength={40} rows={1} spellCheck="false" id='first-name-textarea' onChange={onChangeFirstName}></textarea>
                                </div>
                                <div className='edit-profile-name' id='last-name-box'>
                                    <div id='last-name-box-div'>Last name</div>
                                    <textarea maxLength={40} rows={1} spellCheck="false" id='last-name-textarea' onChange={onChangeLastName}></textarea>
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
                    <div className='profile-banner' style={{ backgroundImage: `url(${props.userDetail.coverImage.url}` }}>
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
                    <div className='bio' style={{whiteSpace:"pre-wrap"}}>{props.userDetail.bio?props.userDetail.bio:"This is Your Bio. Edit it from 'Edit Profile' option"}</div>
                    <div className='your-activity'>
                        <div className='your-activity-text'>Activity</div>
                        <div className='your-activity-text'>Media</div>
                        <div className='your-activity-text'>Likes</div>
                    </div>
                    {userPosts.slice(0).reverse().map(createActivity)}
                </div>
            </div>
        </div>
    )
}

export default Profile;