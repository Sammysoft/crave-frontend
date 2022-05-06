import React, { useState, useEffect } from "react";
import LeftBar from "../../LeftBar";
import NavBar from "../../NavBar/Navbar";
import Menu from "./menu";
import { StyledObject } from "../../../StyleObject";
import CategoryButton from "../category-button";
import url from "../../../config";
let api = url.api;

const Category = () => {
  const [storename, setStorename] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${api}merchant/dashboard`, {
      headers: {
        Authorization: token,
      },
    }).then(async (res) => {
      let response = await res.json();
      console.log(response);
      setStorename(response.data.storename);
    });
  }, []);

  return (
    <>
      <div style={StyledObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyledObject.rightbarWrapper}>
          <NavBar page="Menu List" category={<CategoryButton />} />
          <Menu storename={storename} />
        </div>
      </div>
    </>
  );
};

export default Category;
