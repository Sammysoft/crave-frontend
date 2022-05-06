import React from "react";
import styled from "styled-components";

const StatusInfo = styled.span`
  background: linear-gradient(101.63deg, #d76666 -26.55%, #fedd82 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding: 10px;
`;
var StyledObject = {
  missedOrdersWrapper: {
    padding: "10px",
    backgroundColor: "white",
    minHeight: "50vh",
    borderRadius: "5px",
    position: "relative",
    width: "100%",
    marginBottom: "10vh",
    boxShadow: "-7px 7px 14px rgba(248, 141, 43, 0.07)",
  },
  missedOrderHeader: {
    width: "100%",
    padding: "15px 5px 0px 5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-between",
    flexDirection: "row",
    fontWeight: "700",
    fontSize: "24px",
  },
  th: {
    color: "#FEB52E",
    fontWeight: "500",
    padding: "5px",
    textAlign: "left",
  },
  td: {
    padding: "5px",
    textAlign: "left",
  },
  more: {
    backgroundImage:
      "linear-gradient(50deg,rgba(189, 0, 0, 1), rgba(254, 181, 46, 1))",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  },
  storeInfo: {
    height: "30vh",
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const MoreWrapper = styled.span`
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
  fonts-size: 36px;
`;

const MissedOrders = ({ orders, storeid }) => {
  return (
    <>
      <div style={StyledObject.missedOrdersWrapper}>
        <span style={StyledObject.missedOrderHeader}>
          {" "}
          Missed Order<span style={StyledObject.more}>0</span>
        </span>
        <br />
        <hr style={{ color: "#FEB52E" }} />
        {orders.length != 0 ? (
          <>
            <table style={{ width: "100%" }}>
              <thead>
                <th style={StyledObject.th}>Username</th>
                <th style={StyledObject.th}>Most Ordered</th>
                <th style={StyledObject.th}>Date/Time</th>
              </thead>
              <tbody>
                <tr>
                  <td style={StyledObject.td}>@ilesanmi</td>
                  <td style={StyledObject.td}>Jollof Rice</td>
                  <td style={StyledObject.td}>Sept 12, 2021 / 09:45</td>
                </tr>
                <tr>
                  <td style={StyledObject.td}>@ilesanmi</td>
                  <td style={StyledObject.td}>Jollof Rice</td>
                  <td style={StyledObject.td}>Sept 12, 2021 / 09:45</td>
                </tr>
                <tr>
                  <td style={StyledObject.td}>@ilesanmi</td>
                  <td style={StyledObject.td}>Jollof Rice</td>
                  <td style={StyledObject.td}>Sept 12, 2021 / 09:45</td>
                </tr>
              </tbody>
            </table>
            <span
              style={{
                width: "100%",
                textAlign: "right",
                float: "right",
                padding: "5px",
              }}
            >
              <MoreWrapper className="More">
                <a href="/orders/missed">More</a>{" "}
              </MoreWrapper>
            </span>
          </>
        ) : (
          <>
            <div style={StyledObject.storeInfo}>
              <StatusInfo>You do not have any missed orders</StatusInfo>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MissedOrders;
