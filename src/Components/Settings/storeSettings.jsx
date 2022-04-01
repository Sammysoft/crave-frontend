import React from "react";
import NavBar from '../Dashboard/NavBar/Navbar';
import { StyledObject } from "../StyleObject";
import LeftBar from "../Dashboard/LeftBar";
import Menu from './storeSettingsMenu'

const StoreSettings=()=>{
    return(
        <>
            <div style={StyledObject.dashboardWrapper}>
                <LeftBar />
                <div style={StyledObject.rightbarWrapper}>
                        <NavBar page="Store Settings"/>
                        <Menu />
                </div>
            </div>
        </>
    )
}
export default StoreSettings;