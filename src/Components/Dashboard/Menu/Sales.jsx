import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { StyledObject } from "../../StyleObject";
import styled from "styled-components";

const StatusInfo = styled.span`
  background: linear-gradient(101.63deg, #d76666 -26.55%, #fedd82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 24px;
`;
const Sales = ({ chartData, orders }) => {
  return (
    <>
      <div style={StyledObject.salesWrapper}>
        <div style={StyledObject.salesHeader}>Sales</div>
        <br />
        <hr style={{ color: "#FEB52E" }} />
        <>
          <Line data={chartData} />
        </>
      </div>
    </>
  );
};

export default Sales;
