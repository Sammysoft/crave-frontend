import React from "react";
import MoreDetail from "./moredetails";
import Offer from "./offer";
import Image from "./image";
import Image2 from "./image_left";
import Image1 from "../../assets/left_image.png";
import Image4 from "../../assets/left_image2.png";
import { StyledObject } from "../../StyleObject";
import Merchant from "./register_merchant";
import styled from "styled-components";
import Newsletter from "./newsletter";
import Footer from "./footer";
import applestore from "../../assets/appstore.png";
import play from "../../assets/play.png";
import getapp from "../../assets/getapp.png";
import getappback from '../../assets/getapp-back.png'


let GetAppSection = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
background-image: url(${getappback});
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
`


const Section = () => {
  var displayText = [
    {
      head: "Discover a wide range of meals",
      body: `Food adventure in the palm of your hands`,
    },
    {
      head: "Easy convenient interface",
      body: `You tap we deliver`,
    },
    {
      head: "Pre-Order",
      body: `Get prioritized deliveries when you preorder`,
    },
    {
      head: "Create and share moments",
      body: `When memories matter, we will be with you to make them come alive`,
    },
  ];

  return (
    <>
      <div style={StyledObject.weOfferWrapper}>
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
        <Merchant />

        <GetAppSection>
          <img src={getapp} alt="getapp" />
          <div style={StyledObject.linkUpElements}>
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
