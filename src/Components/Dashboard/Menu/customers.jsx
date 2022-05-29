import React from "react";
import Chart from "react-apexcharts"
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
const Customers = ({ chartData, orders }) => {
  return (
    <>
      <div style={StyledObject.salesWrapper}>
        <div style={StyledObject.salesHeader}>Customers </div>
        <br />
        <hr style={{ color: "#FEB52E" }} />
        <>
        <Chart
            type="donut"
            width={"100%"}
            height={"100%"}
            series={[50, 200]}
            options={{
              labels: [
                "New",
                "Old"
              ],

            }}
          />
        </>
      </div>
    </>
  );
};

export default Customers;
