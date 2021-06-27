import React from 'react';
import  "./Sidebar.css"

import SpeedIcon from '@material-ui/icons/Speed';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar() {
    return (
        <div className="Sidebar">
            <section className="Sidebar_Head">
                <h2>Ekank</h2>
            </section>

            <section className="Sidebar_List">
                <div className="Sidebar_Element">
                    <div className="Sidebar_Element_Icon"><SpeedIcon/></div>
                    <p>Dashboard</p>
                </div>
                <div className="Sidebar_Element">
                    <div className="Sidebar_Element_Icon"><EqualizerIcon/> </div>
                    <p>Statistics</p>
                </div>
                <div className="Sidebar_Element">
                    <div className="Sidebar_Element_Icon"><AssignmentIcon/> </div>
                    <p>Posts</p>
                </div>
                <div className="Sidebar_Element">
                    <div className="Sidebar_Element_Icon"><PeopleAltIcon/> </div>
                    <p>Authors</p>
                </div>
                <div className="Sidebar_Element">
                    <div className="Sidebar_Element_Icon"><AccountCircleIcon/></div>
                    <p>Account</p>
                </div>
                <div className="Sidebar_Element">
                    <div className="Sidebar_Element_Icon"><ExitToAppIcon/> </div>
                    <p>Log Out</p>
                </div>
            </section>

        </div>
    )
}

export default Sidebar
