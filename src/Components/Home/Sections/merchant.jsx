import React from "react";
import MoreDetail from "./moredetails";
import Offer from "./offer";
import Image from "./image-merchant";
import Image2 from "./image_left-merchant";
import Image1 from "../../assets/left_image1.png";
import Image4 from "../../assets/left_image3.png";
import { StyledObject } from "../../StyleObject";
import Merchant from "./register_merchant";
import styled from "styled-components";
import Newsletter from "./newsletter";
import Footer from "./footer";
import applestore from "../../assets/appstore.png";
import play from "../../assets/play.png";
import getapp from "../../assets/getapp1.png";
import getappback from "../../assets/getapp-back.png";

let GetAppSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 30vw;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url(${getappback});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  margin-top:40vh;
`;

let GetAppText = styled.span`
  color: #db0000;
  font-weight: 700;
  font-size: 1.5rem;
  font-family: Nunito;
  &:before {
    content: " Get ";
    color: black;
    font-weight: 700;
  }
  &:after {
    content: " App(Merchant)";
    color: black;
    font-weight: 700;
  }
`;

const Section = () => {
  var displayText = [
    {
      head: "Increased Visibility",
      body: `A seamless solution of being in the full glare of your potential customers`,
    },
    {
      head: "Increased customer base",
      body: `We believe in assisting our merchants increase and estalish a loyal customer base`,
    },
    {
      head: "Time management tools",
      body: `Get prioritized deliveries when you preorder`,
    },
    {
      head: "Data analytics",
      body: `Optimize experience and output with insights and performance metrics`,
    },
  ];

  return (
    <>
      <div>
        <Offer />
        <MoreDetail
          imageSrc={Image1}
          head={displayText[0].head}
          body={displayText[0].body}
        />
        <MoreDetail
          image={<Image />}
          head={displayText[1].head}
          body={displayText[1].body}
        />
        <MoreDetail
          imageSrc={Image4}
          head={displayText[2].head}
          body={displayText[2].body}
        />
        <MoreDetail
          image={<Image2 />}
          head={displayText[3].head}
          body={displayText[3].body}
        />
        {/* <Merchant /> */}

        <GetAppSection>
          <img src={getapp} alt="getapp" />
          <div>
            <div>
              <GetAppText>CRAVE</GetAppText>
            </div>
            <div style={StyledObject.appBtn}>
              <img src={applestore} alt="applestore" />
              <span>
                <span>Available on</span>
                <br />
                <span style={{ fontWeight: "700", fontSize: "1rem" }}>
                  App Store
                </span>
              </span>
            </div>
            <div style={StyledObject.appBtn}>
              <img src={play} alt="playstore" />
              <span>
                <span>Available on</span>
                <br />
                <span style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Google Play
                </span>
              </span>
            </div>
          </div>
        </GetAppSection>

        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Section;
