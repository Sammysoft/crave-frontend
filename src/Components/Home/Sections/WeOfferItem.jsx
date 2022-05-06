import React from "react";
import styled from "styled-components";
import { StyledObject } from "../../StyleObject";

const HeadWrapper = styled.span`
  background-image: linear-gradient(101.63deg, #bd0000 -26.55%, #feb52e 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const WeOfferItem = ({ body }) => {
  return (
    <>
      {body.map((val, id) => {
        return (
          <>
            <div style={StyledObject.weOfferItemWrapper} key={id}>
              <div
                style={{ width: "40%", alignItems: "center", margin: "auto" }}
              >
                <div style={StyledObject.weOfferItemHead}>
                  <img src={val.url} alt={id} style={{ paddingTop: "25%" }} />
                </div>
              </div>
              <br />
              <div style={StyledObject.weOfferItemBody}>
                <HeadWrapper>{val.title}</HeadWrapper>
                <br />
                <br />
                {val.content}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default WeOfferItem;
