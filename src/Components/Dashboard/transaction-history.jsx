import React from "react";
import NavBar from "./NavBar/Navbar";
import LeftBar from "./LeftBar/index";
import { StyledObject } from "../StyleObject";
import Menu from "./Menu/history";

const History = () => {
  return (
    <>
      <div style={StyledObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyledObject.rightbarWrapper}>
          <NavBar page="Transaction History" />
          <Menu />
        </div>
      </div>
    </>
  );
};

export default History;
