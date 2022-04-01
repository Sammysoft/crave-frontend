import React, { useState } from "react";
import CancelledOrders from "./cancelledOrder";
import Customers from "./customers";
import Downtime from "./downtime";
import InaccurateOrder from "./inaccurateOrder";
import MissedOrders from "./missedOrders";
import Sales from "./Sales";
import TopSellingProducts from "./topsellingproducts";
import { UserData } from './userdata';
import { StyledObject } from "../../StyleObject";

const Menu = ()=>{
    const [userData, setUserData] = useState({
        labels: UserData.map((data)=>data.amount),
        datasets: [{

            label: 'Sales',
            data: UserData.map((data)=>data.Month),
            backgroundColor: ['rgba(113, 0, 0, 1)','rgba(254, 181, 46, 1)','rgba(189, 0, 0, 1)', 'rgba(255, 244, 213, 1)', 'rgba(229, 229, 229, 1)'],
            border: '2px',
            drawActiveElementsOnTop: false,
            fill: {
                target: 'origin',
                above: '#fbe5d2',   // Area will be red above the origin
                below: '#fbe5d2'
            },
            tension: 0.1
        }]
    });
    return(
        <>
          <div style={StyledObject.dashWrap}>
          <div style={StyledObject.dashboardMenu}>
                     <Sales chartData={userData}/>
                    <MissedOrders />
            </div>
            <div style={StyledObject.dashboardMenu}>
                     <TopSellingProducts chartData={userData}/>
                    <InaccurateOrder />
            </div>
            <div style={StyledObject.dashboardMenu}>
                    <Customers chartData={userData}/>
                    <CancelledOrders />
            </div>
            <div style={StyledObject.dashboardMenu}>
                     {/* <Sales /> */}
                    {/* <Downtime /> */}
            </div>
          </div>
        </>
    )
}

export default Menu;