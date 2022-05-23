import React from "react";
import NavBar from "../Components/Home/navbar-merchant";
import { StyledObject } from "../Components/StyleObject";
import styled from "styled-components";
import image from "../Components/assets/signup.png";
import Section from "../Components/Home/Sections/merchant";

let RegisterWrapper = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 100vh;
`;
const NameWrapper = styled.p`
  background-image: linear-gradient(101.63deg, #bd0000 -26.55%, #feb52e 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 3rem;
  position: absolute;
  top: 70vh;
  left: 10vh;
`;

const MerchantPage = () => {
  return (
    <>
      <div style={StyledObject.homeBodySection}>
        <NavBar />
        <RegisterWrapper>
          <img src={image} alt="display-pic" height="100%" width="100%" />
          <NameWrapper>Your business is our business</NameWrapper>
          <p
            style={{
              position: "absolute",
              top: "80vh",
              left: "10vh",
              fontWeight: "700",
              color: "white",
            }}
          >
            We believe in assisting our merchants increased and establish a
            loyal customer base
          </p>
        </RegisterWrapper>
        <Section />
      </div>
    </>
  );
};

export default MerchantPage;
