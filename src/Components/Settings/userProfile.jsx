import React from "react";
import NavBar from '../Dashboard/NavBar/Navbar';
import { StyledObject } from "../StyleObject";
import LeftBar from "../Dashboard/LeftBar";
import Menu from './userProfileMenu';




const UserProfile=()=>{
    return(
        <>
            <div style={StyledObject.dashboardWrapper}>
                <LeftBar />
                <div style={StyledObject.rightbarWrapper}>
                        <NavBar page="User Profile"/>
                        <Menu />
                </div>
            </div>
        </>
    )
}

export default UserProfile;