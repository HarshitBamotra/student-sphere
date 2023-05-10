import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

export default function Message() {

    
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    USER-ID
                    <span className="message__timestamp">this is a timestamp</span>
                </h4>
                <p className='actual__message'>This is a message</p>
            </div>
        </div>
    )
}

 
