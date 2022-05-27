import React from "react";
import { StyledObject } from "../StyleObject";
import styled from "styled-components";
import map from "../Dashboard/MenuList/svg/location.svg"
import chevronright from '../Dashboard/MenuList/svg/chevron-right.svg'
import chevrondown from '../Dashboard/MenuList/svg/chevron-down.svg'


let GotoMap = styled.span`
background-image: linear-gradient(
    50deg,
    rgba(189, 0, 0, 1),
    rgba(254, 181, 46, 1)
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  float: right;
  padding: 5px 0px;
`;
const RightMenu = () => {
  return (
    <>
      <div style={StyledObject.storefrontrightMenu}>
        <div style={StyledObject.storefrontReservationWrapper}>
          <div
            style={{
              fontFamily: "Nunito",
              fontSize: "",
              fontWeight: "600",
              color: "black",
              textAlign: "center",
            }}
          >
            {" "}
            Make a reservation
            <hr />
          </div>
          <div>
            <span>
              <span style={{ fontWeight: "400", marginBottom: "5vh" }}>
                Number of people
              </span>
              <span style={{marginBottom: "5vh"}}>
                <input style={StyledObject.inputReservationField} type="text" />
              </span>
            </span><br/><br/>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "45% 45%",
                gap: "10%",
                width: "100%",
                height: "10vh",
              }}
            >
              <span
                style={{ borderBottom: "1px dashed #717171", width: "100%", position: "relative" }}
              >
                Date
              <img style={{position: "absolute", bottom: "1px", right: "1px"}} src={chevrondown} alt="chevron-down" />
              </span>
              <span
                style={{ borderBottom: "1px dashed #717171", width: "100%", position: "relative" }}
              >
                Time
                <img style={{position: "absolute", bottom: "1px", right: "1px"}} src={chevrondown} alt="chevron-down" />
              </span>
            </div>
          </div>
          <div style={{ width: "100%", marginTop: "5vh" }}>
            <div
              style={{
                color: "#DB0000",
                fontWeight: "700",
                backgroundColor: "#FEB52E",
                width: "100%",
                padding: "5px",
                borderRadius: "3px",
                textAlign: "center",
              }}
            >
              Make reservation
            </div>
          </div>
        </div>
        <div style={StyledObject.storefrontReservationWrapper2}>
              <div style={{position: "absolute", bottom: "10px",width: "90%", margin: "auto"}}>
                <img src={map} alt="location" />{"  "} Yunusa avenue, 500 Housing Units Ganaja Road Lokoja, Kogi....<br/>
                <GotoMap>Go to Map <img src={chevronright} alt="chevron-right" /></GotoMap>
              </div>

        </div>
      </div>
    </>
  );
};

export default RightMenu;
