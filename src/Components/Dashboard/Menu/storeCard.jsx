import React from "react";
import { StyledObject } from "../../StyleObject";
import styled from "styled-components";
import location from "../MenuList/svg/location.svg";

let StoreTagline = styled.span`
  background: linear-gradient(101.63deg, #bd0000 -26.55%, #feb52e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 800;
  font-size: 12px;
`;

const StoreCard = ({ storetagline, storelocation, storelogo, storename }) => {
  return (
    <>
      <div style={StyledObject.storeCardWrapper}>
        <div style={StyledObject.storeCardLeftSide}>
          {" "}
          <img src={"/assets/img/fristos.png"} alt={"store logo"} />
        </div>
        <div style={StyledObject.storeCardRightSide}>
          <div style={StyledObject.storeCardRightSideWrapper}>
            <span style={StyledObject.storeNameWrapper}>{storename}</span>
            <span style={StyledObject.storeLocationWrapper}>
              <img src={location} alt={"location svg"} /> {storelocation}
            </span>
            <StoreTagline>{storetagline}</StoreTagline>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoreCard;
