import React from "react";
import { StyledObject } from "../StyleObject";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div style={StyledObject.navWrapper}>
        <span style={StyledObject.navItem}>
          <img src={"/assets/logo.png"} alt="" />
        </span>
        <span style={StyledObject.navItem}>
          <Link
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: "#BD0000",
            }}
            to="/merchant/"
          >
            <span style={StyledObject.navItemContent1}>Accounts</span>
          </Link>
        </span>
      </div>
    </>
  );
};
export default NavBar;
