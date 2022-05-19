import React from "react";
import { StyledObject } from "../StyleObject";
import drop from "../assets/drop.png";

const Menu = () => {
  return (
    <>
      <div style={StyledObject.dashWrap}>
        <div style={StyledObject.storeMenu2}>
          <div style={{ padding: "20px 40px" }}>
            <i>
              <span style={{ fontWeight: "200" }}>
                Upload your Ads flyer or video
              </span>
            </i>
          </div>
          <div
            style={{
              border: "1px dashed #717171",
              width: "90%",
              margin: "auto",
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={drop} alt="drop" />
            <p>Drop design here</p>
          </div>
          <div style={{ width: "100%" }}>
            <span
              style={{
                float: "right",
                color: "#DB0000",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#FEB52E",
                margin: "5px 40px 15px 0px",
                fontWeight: "600",
              }}
            >
              Upload
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
