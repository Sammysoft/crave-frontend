import React from "react";
import { StyledObject } from "../../StyleObject";
import styled from "styled-components";

const MoreDetail = ({ image, imageSrc, body, head }) => {
  const DetailsHeadWrapper = styled.p`
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

  return (
    <>
      <div style={StyledObject.moreDetailsWrapper}>
        {image ? (
          <div style={StyledObject.moreDetailsText}>
            <>
              <DetailsHeadWrapper>{head}</DetailsHeadWrapper>
              <br />
              <span>{body}</span>
            </>
          </div>
        ) : (
          <div style={StyledObject.moreDetailsImage}>
            <img src={imageSrc} alt={imageSrc} height="50%" width="100%" />
            <div style={StyledObject.overlayDetails}></div>
          </div>
        )}

        {imageSrc ? (
          <div style={StyledObject.moreDetailsText}>
            <>
              <DetailsHeadWrapper>{head}</DetailsHeadWrapper>
              <br />
              <span>{body}</span>
            </>
          </div>
        ) : (
          <div style={StyledObject.moreDetailsImage}>
            {image}
            <div style={StyledObject.overlay2Details}></div>
          </div>
        )}
      </div>
    </>
  );
};

export default MoreDetail;
