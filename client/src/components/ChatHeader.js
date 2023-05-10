import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import './ChatHeader.css'
import { Tooltip } from '@mui/material';
export default function Chat() {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Channel Name
                </h3>
            </div>
            <div className="chatHeader__right">
                <Tooltip title="Notifications">
                    <NotificationsIcon />
                </Tooltip>

                <Tooltip >
                    <EditLocationRoundedIcon />
                </Tooltip>

                <Tooltip title="Community">
                    <PeopleAltRoundedIcon />
                </Tooltip>
            </div>
            <div className="chatHeader__search">
                <input placeholder='Search' />
                <Tooltip title="Search">
                    <SearchRoundedIcon />
                </Tooltip>
            </div>
            <Tooltip title="Help">
                <HelpRoundedIcon />
            </Tooltip>
        </div>
    )
}

