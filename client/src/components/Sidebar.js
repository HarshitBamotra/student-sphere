import React, { useEffect, useState } from 'react'
import './SideBar.css'
import SidebarOption from './SidebarOption.js'
import { Button } from "@mui/material";

// import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import VerifiedIcon from '@mui/icons-material/Verified';
import SettingsIcon from '@mui/icons-material/Settings';
import StudifyIcon from './StudifyIcon';
import { Link } from 'react-router-dom';


export default function Sidebar() {
    const [path,setPath] = React.useState("/");
    const [id,setId] = useState("");
    function clickHandle(){
        console.log("Lmao")
    }
    
    useEffect(()=>{
        async function fetchData(){
            var url = "http://localhost:5000/userDetail";
            const data = await fetch(url);
            var parsedData = await data.json();
            // console.log(parsedData);
            setId(parsedData.userDetail._id);
        }
        fetchData();
    },[]);
    
    return (
        <div className="sidebar">
            <StudifyIcon />
            <div className="sidebarOptions">
                {/* <SidebarOption Icon={HomeIcon} text="Home" /> */}
                <SidebarOption path={'/explore/forYou'} Icon={ExploreIcon} text="Explore" onClick={clickHandle}/>
                <SidebarOption path={'/chat'} active Icon={MarkUnreadChatAltIcon} text="Messages" />
                <SidebarOption path={'/profile/'+id} Icon={PersonIcon} text="Profile" />
                <SidebarOption path={'/about'} Icon={InfoIcon} text="About Us" />
                <SidebarOption path={'/notifications'} Icon={NotificationAddIcon} text="Notifications" />
                <SidebarOption path={'/settings'} Icon={SettingsIcon} text="Settings" />
            </div>
            <div className="sidebarBtns">
                <Button variant="contained" className="sign_B" endIcon={<LogoutIcon />}>
                    <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to='/'>
                        Sign Out
                    </Link>
                </Button>
                <Button variant="contained" className="prem_B" endIcon={<VerifiedIcon />}>
                    <Link
                        style={{ textDecoration: 'none', color: '#000' }}
                        to='/premium'>
                        Premium
                    </Link>
                </Button>
            </div>

        </div>
    )
}
