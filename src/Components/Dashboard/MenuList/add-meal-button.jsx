import React from "react";
import plus from "./svg/plus.svg";
import { NavLink } from "react-router-dom";
import { StyledObject } from "../../StyleObject";

const AddMealButton = () => {
  return (
    <>
      <NavLink
        style={{ textDecoration: "none" }}
        to="/lists/addmeal"
        className="addmeal"
      >
        <span style={StyledObject.buttonStyle}>
          Add a meal <img src={plus} alt="plus" />
        </span>
      </NavLink>
    </>
  );
};

export default AddMealButton;
