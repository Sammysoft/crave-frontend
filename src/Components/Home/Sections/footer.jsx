import React from "react";
import { StyledObject } from "../../StyleObject";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";


const Footer = () => {
  const ListHeadWrapper = styled.li`
    color: #bd0000;
    font-weight: 700;
  `;
  return (
    <>
      <div style={StyledObject.footerWrapper}>
        <img src={logo} alt="logo" />
        <div style={StyledObject.linkUps}>
          <div style={StyledObject.linkUpElements}>
            <ul style={StyledObject.ul}>
              <ListHeadWrapper>Contact Us</ListHeadWrapper>
            </ul>
          </div>
          <div style={StyledObject.linkUpElements}>
            <ul style={StyledObject.ul}>
              <ListHeadWrapper>Information</ListHeadWrapper>
              <li style={StyledObject.li}>About Crave</li>
              <li style={StyledObject.li}>Add your restaurant</li>
              <li style={StyledObject.li}>Plans and pricings</li>
              <li style={StyledObject.li}>Career</li>
            </ul>
          </div>
          <div style={StyledObject.linkUpElements}>
            <ul style={StyledObject.ul}>
              <ListHeadWrapper>Helpful Links</ListHeadWrapper>
              <li style={StyledObject.li}>Services</li>
              <li style={StyledObject.li}>Support</li>
              <li style={StyledObject.li}>Terms and Conditions</li>
              <li style={StyledObject.li}>Privacy Policy</li>
            </ul>
          </div>
         
        </div>
        <div style={StyledObject.socialMediaIconsWrapper}>
          <span style={StyledObject.socialMediaIcons}>
            <img src={facebook} alt="facebook" />
          </span>
          <span style={StyledObject.socialMediaIcons}>
            <img src={instagram} alt="facebook" />
          </span>
          <span style={StyledObject.socialMediaIcons}>
            <img src={tiktok} alt="facebook" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
