import React from "react";
import LeftBar from "../../LeftBar";
import NavBar from "../../NavBar/Navbar";
import Menu from './Menu';
import { StyledObject } from "../../../StyleObject";

const AddMeal= ()=>{

    return(
        <>
          <div style={StyledObject.dashboardWrapper}>
            <LeftBar />
            <div style={StyledObject.rightbarWrapper}>
            <NavBar page="Menu List"/>
            <Menu />
          </div>
        </div>
        </>
    )
}

export default AddMeal;