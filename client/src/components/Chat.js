import React from 'react'
import ChatHeader from './ChatHeader.js'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message.js'
import { Tooltip } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PollIcon from '@mui/icons-material/Poll';


import './Chat.css'

function Chat() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat__input">
                <Tooltip title="Upload">
                    <AddCircleIcon id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} />
                </Tooltip>
                <div className="menu-container">

                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose} >
                            <ArticleIcon color="primary" /> Document</MenuItem>
                        <MenuItem onClick={handleClose} color="action">
                            <CameraAltIcon color="primary" /> Picture</MenuItem>
                        <MenuItem onClick={handleClose} color="action">
                            <AccountCircleIcon color="primary" /> Contacts</MenuItem>
                        <MenuItem onClick={handleClose} color="action">
                            <LocationOnIcon color="primary" /> Location</MenuItem>
                        <MenuItem onClick={handleClose} color="action">
                            <PollIcon color="primary" />Poll</MenuItem>
                    </Menu>
                </div>
                <form >
                    <input placeholder={`Message #TESTCHANNEL`} />
                    <button className='chat__inputButton' type='submit'> Send Message</button>
                </form>
                <div className="chat__inputIcons">
                    <Tooltip title="SEND">
                        <SendRoundedIcon />
                    </Tooltip>
                    <Tooltip title="GIF">
                        <GifIcon />
                    </Tooltip>
                    <Tooltip title="EMOJI">
                        <EmojiEmotionsIcon />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default Chat
