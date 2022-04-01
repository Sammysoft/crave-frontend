import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'


var StyledObject = {
    salesWrapper:{
       padding: '10px',
       backgroundColor: 'white',
       maxHeight: 'fit-content',
       borderRadius: '5px',
       width: '40%'
    },
    salesHeader:{

    }
   }

const TopSellingProducts =({ chartData })=>{
    return(
        <>
        <div style={StyledObject.salesWrapper}>
              <span style={StyledObject.salesHeader}><h4>Top Selling Meals</h4> </span><br/><hr style={{color: '#FEB52E'}}/>
                <Pie data={chartData}/>
        </div>
        </>
    )
}

export default TopSellingProducts;