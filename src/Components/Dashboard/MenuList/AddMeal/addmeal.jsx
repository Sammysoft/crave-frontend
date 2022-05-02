import React, { useState, useEffect } from "react";
import LeftBar from "../../LeftBar";
import NavBar from "../../NavBar/Navbar";
import Menu from './Menu';
import { StyledObject } from "../../../StyleObject";
import CategoryButton from '../category-button'


const AddMeal= ()=>{



    return(
        <>
          <div style={StyledObject.dashboardWrapper}>
            <LeftBar />
            <div style={StyledObject.rightbarWrapper}>
            <NavBar page="Menu List" category={<CategoryButton />}/>
            <Menu />
          </div>
        </div>
        </>
    )
}

export default AddMeal;