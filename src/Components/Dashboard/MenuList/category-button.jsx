import React from "react";
import plus from './svg/plus.svg';
import { NavLink } from "react-router-dom";
import { StyledObject } from "../../StyleObject";

const CategoryButton= ()=>{


    return(
        <>
                <NavLink style={{textDecoration: 'none'}} to="/lists/category" className="addmeal">
                <span style={StyledObject.buttonStyle} >
                    Category <img src={plus} alt="plus" />
                </span>
                </NavLink>
        </>
    )
}

export default CategoryButton;