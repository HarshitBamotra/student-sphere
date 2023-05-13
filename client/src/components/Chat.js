import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

function Chat() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [message, setMessage] = useState("");
    const [username, setusername] = useState("");
    const [profilepic, setprofilepic] = useState("");
    const [messages, setMessages] = useState([]);

    function onChangeMessage(e) {
        setMessage(e.target.value);
    }

    const [check, setCheck] = useState(0);
    React.useEffect(() => {
        async function fetchData() {
            var url = "http://localhost:5000/userDetail";
            const data = await fetch(url);
            var parsedData = await data.json();
            setusername(parsedData.userDetail.username);
            setprofilepic(parsedData.userDetail.profileImage);
            if (Object.keys(parsedData.userDetail).length > 0) {
                setCheck(-1);
            }
            else {
                setCheck(check + 1);
            }
        }
        fetchData();
    }, [check]);

    function handleSubmitMessage(e) {
        e.preventDefault();
        const messageObject = {
            message: message,
            profileImage: profilepic,
            username: username
        }
        if (message.length !== 0) {
            axios.post("http://localhost:5000/chatMessage", messageObject)
                .then((res) => {
                    setMessages(messages => [...messages, res.data]);
                }).catch((error) => {
                    console.log(error);
                })
            const text = document.getElementById('chat-input-textarea');
            text.value = "";
        }
    }


    const messagesEndRef = React.useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(()=>{
        scrollToBottom();
    },[messages]);


    useEffect(() => {
        async function fetchMessages() {
            let url = "http://localhost:5000/allMessage";
            let data = await fetch(url);
            let parsedData = await data.json();
            setMessages(parsedData.allMessages);
        }
        fetchMessages();
    }, [])


    function createMessage(message) {
        return (
            <Message username={message.username} timestamp={message.timestamp} message={message.message} pfp={message.userProfileImage}></Message>
        )
    }

    if (check === -1) {
        return (
            <div className="chat">
                <ChatHeader />
                <div className="chat__messages" >
                    {messages.map(createMessage)}
                    <div ref={messagesEndRef}></div>
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
                    <form onSubmit={handleSubmitMessage}>
                        <input placeholder={`Message #TESTCHANNEL`} onChange={onChangeMessage} id='chat-input-textarea' />
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
    else {
        return (
            <></>
        )
    }
}

export default Chat
