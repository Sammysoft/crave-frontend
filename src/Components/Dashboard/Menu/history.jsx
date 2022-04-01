import React from 'react';
import { StyledObject } from '../../StyleObject';
import Completed from './completedStatus';
import Cancelled from './cancelledStatus';
import Pending from './pendingStatus';
const Menu = ()=>{


    return(
        <>

                <div style={StyledObject.mainMenu}>
                        <table style={{width: '100%'}}>
                            <thead style={StyledObject.thead}>
                                <th style={StyledObject.th}>Date</th>
                                <th style={StyledObject.th}>Customer</th>
                                <th style={StyledObject.th}>Order </th>
                                <th style={StyledObject.th}>Amount</th>
                                <th style={StyledObject.th}>Payment Method</th>
                                <th style={StyledObject.th}>Status</th>
                            </thead>
                            <tbody>
                                <tr style={StyledObject.tr}>

                                    <td style={StyledObject.td}>September 24, 2022</td>
                                    <td style={StyledObject.td}>@juliana</td>
                                    <td style={StyledObject.td}>Spaghetti</td>
                                    <td style={StyledObject.td}>N4,500</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Completed/>}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                        <td style={StyledObject.td}>September 20, 2022</td>
                                    <td style={StyledObject.td}>@nurudeen</td>
                                    <td style={StyledObject.td}>Fried rice</td>
                                    <td style={StyledObject.td}>N3,500</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Completed />}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                        <td style={StyledObject.td}>September 14, 2022</td>
                                    <td style={StyledObject.td}>@fawomi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>N5,000</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Pending />}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                      <td style={StyledObject.td}>September 09, 2022</td>
                                    <td style={StyledObject.td}>@ayomide</td>
                                    <td style={StyledObject.td}>Ice cream</td>
                                    <td style={StyledObject.td}>N1,500</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Cancelled />}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                     <td style={StyledObject.td}>August 11, 2022</td>
                                    <td style={StyledObject.td}>@christopher</td>
                                    <td style={StyledObject.td}>Fish rolls</td>
                                    <td style={StyledObject.td}>N3,500</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Completed/>}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                       <td style={StyledObject.td}>August 11, 2022</td>
                                    <td style={StyledObject.td}>@cynthia</td>
                                    <td style={StyledObject.td}>Burger</td>
                                    <td style={StyledObject.td}>N5,000</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Completed/>}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                      <td style={StyledObject.td}>August 09, 2022</td>
                                    <td style={StyledObject.td}>@mancho</td>
                                    <td style={StyledObject.td}>Mixed grills</td>
                                    <td style={StyledObject.td}>N4,000</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Pending />}</td>
                                </tr>
                                <tr style={StyledObject.tr}>

                                   <td style={StyledObject.td}>August 1, 2022</td>
                                    <td style={StyledObject.td}>@lucas</td>
                                    <td style={StyledObject.td}>Jumbalaya Rice</td>
                                    <td style={StyledObject.td}>N5,000</td>
                                    <td style={StyledObject.td}>Transfer</td>
                                    <td style={StyledObject.td}>{<Cancelled />}</td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </>
    )
}

export default Menu;