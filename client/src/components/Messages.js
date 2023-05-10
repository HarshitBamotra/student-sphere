import React from 'react';
import Chat from './Chat'
import Channels from './Channels'
import './messages.css'
export default function Messages() {
    return (
        <div className='messages'>
            <Chat />
            <Channels />
        </div>
    )
}

