import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'

export default function Message(props) {
    return (
        <div className="message">
            <Avatar src={props.pfp.url}/>
            <div className="message__info">
                <h4>
                    {props.username}
                    <span className="message__timestamp">{props.timestamp}</span>
                </h4>
                <p className='actual__message' style={{whiteSpace:"pre-wrap"}}>{props.message}</p>
            </div>
        </div>
    )
}

 
