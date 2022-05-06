import React from "react";
import arrow from "../../Dashboard/MenuList/svg/arrow-right.svg";
import { NavLink } from "react-router-dom";
import { StyledObject } from "../../StyleObject";

const LearnMoreButton = () => {
  return (
    <>
      <NavLink style={{ textDecoration: "none" }} to="" className="addmeal">
        <span style={StyledObject.navItemContent3}>
          Learn More <img src={arrow} alt="arrow" />
        </span>
      </NavLink>
    </>
  );
};

export default LearnMoreButton;
