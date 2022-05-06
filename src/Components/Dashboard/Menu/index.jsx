import React, { useState } from "react";
import CancelledOrders from "./cancelledOrder";
import Customers from "./customers";
import Downtime from "./downtime";
import InaccurateOrder from "./inaccurateOrder";
import MissedOrders from "./missedOrders";
import Sales from "./Sales";
import TopSellingProducts from "./topsellingproducts";
import { UserData } from "./userdata";
import { StyledObject } from "../../StyleObject";
import StoreCard from "./storeCard";

const Menu = ({
  storename,
  storelocation,
  storelogo,
  storetagline,
  storeid,
  orders,
}) => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.amount),
    datasets: [
      {
        label: "Sales",
        data: UserData.map((data) => data.Month),
        backgroundColor: [
          "rgba(113, 0, 0, 1)",
          "rgba(254, 181, 46, 1)",
          "rgba(189, 0, 0, 1)",
          "rgba(255, 244, 213, 1)",
          "rgba(229, 229, 229, 1)",
        ],
        border: "2px",
        drawActiveElementsOnTop: false,
        fill: {
          target: "origin",
          above: "#fbe5d2",
          below: "#fbe5d2",
        },
        tension: 0.1,
      },
    ],
  });
  return (
    <>
      <div style={StyledObject.dashWrap}>
        <StoreCard
          storename={storename}
          storelocation={storelocation}
          storelogo={storelogo}
          storetagline={storetagline}
        />
        <div style={StyledObject.dashboardMenu}>
          <div style={StyledObject.dashboardMenuLeftSide}>
            <Sales chartData={userData} orders={orders} />
            <TopSellingProducts chartData={userData} orders={orders} />
            <Customers chartData={userData} orders={orders} />
          </div>
          <div style={StyledObject.dashboardMenuRightSide}>
            <MissedOrders orders={orders} storeid={storeid} />
            <InaccurateOrder orders={orders} storeid={storeid} />
            <CancelledOrders orders={orders} storeid={storeid} />
            <Downtime orders={orders} storeid={storeid} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
