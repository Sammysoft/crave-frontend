import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';


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

const Customers =({ chartData })=>{
    return(
        <>
        <div style={StyledObject.salesWrapper}>
              <span style={StyledObject.salesHeader}><h4>Customers</h4> </span><br/><hr style={{color: '#FEB52E'}}/>
              <Doughnut data={chartData} />
        </div>
        </>
    )
}

export default Customers;