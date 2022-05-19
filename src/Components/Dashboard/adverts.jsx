import React from "react";
import Menu from './advertsMenu';
import LeftBar from "./LeftBar";
import NavBar from "./NavBar/Navbar";
import { StyledObject } from "../StyleObject";

const Advert = () => {
  return (
    <>
      <div style={StyledObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyledObject.rightbarWrapper}>
          <NavBar page="Ads" />
          <Menu />
        </div>

      </div>
    </>
  );
  }
  export default Advert;
