import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Divider } from "@material-ui/core";
import { StyledObject } from "../../StyleObject";
import url from '../../config';
import styled from "styled-components";
import axios from "axios";
let api = url.api;





const StatusInfo = styled.span`
background: linear-gradient(101.63deg, #D76666 -26.55%, #FEDD82 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-weight: 700;
font-size: 24px
`

const TopSellingProducts =({ chartData, orders })=>{


    return(
        <>
        <div style={StyledObject.salesWrapper}>
              <div style={StyledObject.salesHeader}>Top Selling Meals </div><br/><hr style={{color: '#FEB52E'}}/>


                {orders != 0 ?
                <>
                  <Pie data={chartData} style={{width: "70%", height: "70%"}}/>
                </>:<>
                <div style={StyledObject.storeInfo}>
                        <StatusInfo>You have not made any sales</StatusInfo>
                </div>
                </>
            }


        </div>
        </>
    )
}

export default TopSellingProducts;