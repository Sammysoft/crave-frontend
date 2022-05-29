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
            series={[100, 200, 300, 200, 50, 500, 20, 400, 200, 230, 30, 40]}
            options={{
              labels: [
                "Basmati Rice",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
              ],

            }}
          />
        </>
      </div>
    </>
  );
};

export default TopSellingProducts;
