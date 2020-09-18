import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_EJUCn6PVrfbR35BBPJOf57nCRXgo0AMb1chZE=s192-c-mo"/>
                <div className="sidebar__headerRight">
                    <IconButton> <DonutLargeIcon /> </IconButton>
                    <IconButton> <ChatIcon/> </IconButton>
                    <IconButton> <MoreVertIcon/> </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />


            </div>
        </div>
    )
}

export default Sidebar;
