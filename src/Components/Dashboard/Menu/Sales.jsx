import React from "react";
import Chart from "react-apexcharts";
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
          <Chart
            type="area"
            width={"100%"}
            height={"100%"}
            series={[
              {
                name: "Company",
                color:"#DB0000",
                data: [100, 200, 300, 200, 50, 500, 20, 400, 200, 230, 30, 40],
              },
            ]}
            options={{
              dataLabels:{
                show:false
              },
              xaxis: {
                tickPlacement: "on",
                categories: [
                  "Jan",
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
              },
              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `N${val}`;
                  },
                },
              },
              legend: {
                show: false,
              },
            }}
          />
        </>
      </div>
    </>
  );
};

export default Sales;
