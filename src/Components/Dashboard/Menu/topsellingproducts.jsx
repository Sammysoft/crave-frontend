import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Divider } from "@material-ui/core";
import { StyledObject } from "../../StyleObject";
import url from "../../config";
import styled from "styled-components";
import axios from "axios";
let api = url.api;

const StatusInfo = styled.span`
  background: linear-gradient(101.63deg, #d76666 -26.55%, #fedd82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 24px;
`;

const TopSellingProducts = ({ chartData, orders }) => {
  return (
    <>
      <div style={StyledObject.salesWrapper}>
        <div style={StyledObject.salesHeader}>Top Selling Meals </div>
        <br />
        <hr style={{ color: "#FEB52E" }} />
        <>
          <Chart
            type="pie"
            width={"100%"}
            height={"100%"}
            series={[100, 200, 300, 200, 50]}
            options={{
              colors: [
                "#feb019",
                "#DB0000",
                "#FEB52E",
                "#de8423",
                "#de4a14",
                "#e6b335",
                "#5c3d11",
                "#8a6058"
              ],
              labels: [
                "Basmati Rice",
                "Jambalaya Rice",
                "Plantain and Egg",
                "Meat Sauce",
                "Ice Cream",
              ],
            }}
          />
        </>
      </div>
    </>
  );
};

export default TopSellingProducts;
