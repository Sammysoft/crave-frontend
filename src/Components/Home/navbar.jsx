import React from "react";
import { StyledObject } from "../StyleObject";
import arrow from '../../Components/Dashboard/MenuList/svg/arrow-right.svg'

const NavBar=()=>{
    return(
        <>
            <div style={StyledObject.navWrapper}>
                <span style={StyledObject.navItem}>
                    <img src={'/assets/logo.png'} alt="" />
                </span>
                <span style={StyledObject.navItem}>
                        <span style={StyledObject.navItemContent1}>For Merchants</span>
                        <span style={StyledObject.navItemContent2}>Get the App</span>
                        <span style={StyledObject.navItemContent3}>Join Us <img src={arrow} alt="svg arrow"/></span>
                </span>
            </div>
        </>
    )
}
export default NavBar;