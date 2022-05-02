import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import { StyledObject } from "../../StyleObject";
import styled from "styled-components";



const StatusInfo = styled.span`
background: linear-gradient(101.63deg, #D76666 -26.55%, #FEDD82 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-weight: 700;
font-size: 24px
`
const Customers =({ chartData, orders })=>{
    return(
        <>
        <div style={StyledObject.salesWrapper}>
              <div style={StyledObject.salesHeader}>Customers </div><br/><hr style={{color: '#FEB52E'}}/>


                {orders !=0 ?
                <>
                 <Doughnut data={chartData}  style={{width: "70%", height: "70%"}}/>
                </>:<>
                <div style={StyledObject.storeInfo}>
                        <StatusInfo>You have no customers yet</StatusInfo>
                </div>
                </>
                }

        </div>
        </>
    )
}

export default Customers;