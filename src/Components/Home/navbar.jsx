import React from "react";
import { StyledObject } from "../StyleObject";
import { Link } from "react-router-dom";
import arrow from "../Dashboard/MenuList/svg/arrow-right.svg"

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
          <span style={StyledObject.navItemContent3}>
            Join Us <img src={arrow} alt="svg arrow" />
          </span>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              textDecorationLine: "none",
              color: "black"
            }}
            to="/merchant/home"
          >
            <span style={StyledObject.navItemContent1}>For Merchants</span>
          </Link>
          {/* <span style={StyledObject.navItemContent2}>Get the App</span> */}

        </span>
      </div>
    </>
  );
};
export default NavBar;
