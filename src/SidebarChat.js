import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room name
                    <p>This is the last message</p>
                </h2>

            </div>
        </div>
    )
}

export default SidebarChat;
