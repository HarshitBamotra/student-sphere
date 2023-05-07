import React from 'react';
import "./Profile.css";
import testPfp from '../images/Untitled.jpg'
function Profile() {
    

    return (
        // <div className='profile'>
        //     <div className='topBar'>
        //         <div className='back'>
        //             2---
        //         </div>
        //         <div className='name'>
        //             Harshit Bamotra
        //         </div>
        //     </div>
        //     <div className='profile-overflow'>
        //         <div className='profile-section'> {/* display flex*/}
        //             <div className='banner'>
        //                 <div className='profile-pic'>
        //                     <img src={testPfp} alt=""></img>
        //                 </div>
        //             </div>
        //             <div className='profile-section-content'> {/*display flex column */}
        //                 <div className='profile-name'>
        //                     Harshit Bamotra
        //                 </div>
        //                 <div className='username'>
        //                     @two-little-braincells
        //                 </div>
        //                 <div className='date-of-joining'>
        //                     Joined April 2023
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='bio-section'>
        //             <div className='bio'>
        //                 Something is wrong. I can feel it.<br></br>
        //                 This world is so fucked up<br></br>
        //                 everyone is shit<br></br>
        //             </div>
        //         </div>
        //         <div className='Your-Activity'>Your Activity</div>
        //     </div>

        // </div>

        <div className='profile'>
            <div className='topBar'>
                <div className='back'>
                    2---
                </div>
                <div className='name'>
                    Harshit Bamotra
                </div>
            </div>
            <div className='overflow'>
                <div className='profile-section'>
                    <div className='banner'>
                        <div className='profile-pic'>
                            <img src={testPfp} alt=''></img>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div className='profile-text'>
                            <div className='profile-name'>Harshit Bamotra</div>
                            <div className='username'>@two-little-braincells</div>
                            <div className='date-of-joining'>joined April 2023</div>
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