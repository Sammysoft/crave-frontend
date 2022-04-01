import React from "react";
import plus from './svg/plus.svg';
import { NavLink } from "react-router-dom";
import { StyledObject } from "../../StyleObject";

const Category = (props)=>{
    return(
        <>
            <div>
            <NavLink style={{textDecoration: 'none'}} to="/lists/addmeal" className="addmeal">
                <span style={StyledObject.buttonStyle} >
                    Category <img src={plus} alt="plus" />
                </span>
            </NavLink>
            </div>
        </>
    )
}
export default Category;