import React from 'react';

var StyledObject = {
 missedOrdersWrapper:{
    padding: '10px',
    backgroundColor: 'white',
    maxHeight: 'fit-content',
    borderRadius: '5px',
    position: 'relative',
    width: '45%'
 },
 missedOrderHeader:{
     width: '100%',
     display: 'flex',
     justifyContent: 'space-between',
     alignItems: 'space-between',
     flexDirection: 'row'
 },
    th:{
    color: '#FEB52E',
    fontWeight: '700',
    padding: '10px',
    textAlign: 'left'
    },
    td:{
        padding: '10px',
        textAlign: 'left'
    },
    more:{
        backgroundImage: 'linear-gradient(50deg,rgba(189, 0, 0, 1), rgba(254, 181, 46, 1))',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent'
    }

}

const Downtime = () =>{
    return(
        <>
                <div style={StyledObject.missedOrdersWrapper}>
                           <span style={StyledObject.missedOrderHeader}> <h4>Downtime</h4><span style={StyledObject.more}><h3>10</h3></span></span><br/><hr style={{color: '#FEB52E'}}/>
                           {/* <table>
                              <thead>
                              <th style={StyledObject.th}>Username</th>
                              <th  style={StyledObject.th}>Most Ordered</th>
                              <th style={StyledObject.th}>Date/Time</th>
                              </thead>
                              <tbody>
                                  <tr><td style={StyledObject.td}>@ilesanmi</td><td>Jollof Rice</td><td>Sept 12, 2021 / 09:45</td></tr>
                                  <tr><td  style={StyledObject.td}>@ilesanmi</td><td>Jollof Rice</td><td>Sept 12, 2021 / 09:45</td></tr>
                                  <tr><td style={StyledObject.td}>@ilesanmi</td><td>Jollof Rice</td><td>Sept 12, 2021 / 09:45</td></tr>
                              </tbody>
                           </table> */}
                           <span style={{width: '100%', textAlign: 'right', float: 'right', padding: '10px'}}><span style={StyledObject.more}>More </span></span>
                </div>
        </>

    )
}
export default Downtime;