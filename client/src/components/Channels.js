import React from 'react'
import './channels.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CallIcon from '@mui/icons-material/Call'
import { Avatar, Tooltip } from '@mui/material'
import HeadsetIcon from '@mui/icons-material/Headset'
import SettingsIcon from '@mui/icons-material/Settings'
import MicIcon from '@mui/icons-material/Mic'
import SidebarChannel from './SidebarChannel.js'
// import MicOffIcon from '@mui/icons-material/MicOff';
export default function Channels() {
    return (
        <div className="channels">
            <div className="channel__top">
                <h3>SPEED CUBER AYUSH</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannels" />
                </div>
                
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className='sidebar__voiceIcon' fontSize='large' />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcon">
                    <Tooltip title="Know More" placement='left'>
                        <InfoOutlinedIcon />
                    </Tooltip>
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar />

                <div className="siderbar__profileInfo">
                    <h3>@spdcbr</h3>
                    <p>#thisIsMyID</p>
                </div>
                <div className="sidebar__profileIcons">
                    <Tooltip title='Microphone' placement='left'>
                        <MicIcon />
                    </Tooltip>
                    <Tooltip title='Sound' placement='left'>
                        <HeadsetIcon />
                    </Tooltip>
                    <Tooltip title='Settings' placement='left'>
                        <SettingsIcon />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}


// {/* <ChannelHeader />
// <ChannelBody />
// <ChannelOptions /> */}