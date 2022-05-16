import React from "react";
import { StyledObject } from "../../StyleObject";
import styled from "styled-components";
import shop from "../../assets/shop.png";
import rider from "../../assets/rider.png";

let SelectOptionText = styled.span`
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
  font-size: 1.5rem;
`;

let SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
const Merchant = (props) => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={StyledObject.weOfferHeader}>
        <span style={{ fontWeight: "700", fontSize: "1.5rem" }}>
          Partner with us
        </span>
      </div>

      <div
        style={{
          width: "70%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "auto auto",
          gap: "10%",
        }}
      >
        <SelectOption>
          <img src={shop} alt="logo" />
          <SelectOptionText>Become a Merchant</SelectOptionText>
        </SelectOption>

        <SelectOption>
          <img src={rider} alt="logo" />
          <SelectOptionText>Become a Rider</SelectOptionText>
        </SelectOption>
      </div>
    </>
  );
};

export default Merchant;
