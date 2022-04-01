import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import { StyledObject } from "../../StyleObject";



const Sales =({chartData})=>{
    return(
        <>
        <div style={StyledObject.salesWrapper}>
              <span style={StyledObject.salesHeader}><h4>Sales</h4> </span><br/><hr style={{color: '#FEB52E'}}/>
              <Line  data={chartData}/>
        </div>
        </>
    )
}

export default Sales;