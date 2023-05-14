import React from 'react'
import './sidebaroption.css'
import { IconButton, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';
export default function SidebarOption({ active, text, Icon, path }) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <IconButton color='inherit'>
                <Tooltip title={text} placement="right">
                    <NavLink
                        style={({ isActive }) => {
                            return isActive ? { color: "#0096ff" } : { color: "#fff" }
                        }}
                        to={path} className="something">
                        <Icon />
                        
                    </NavLink>
                </Tooltip>
            </IconButton>
        </div >
    );
}

