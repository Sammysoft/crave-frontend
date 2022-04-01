import React from "react";

const Menu =()=>{

    var StyledObject = {
    mainMenu: {
        fontFamily: 'Nunito',
        width: '90%',
        padding: '40px',
        backgroundColor: 'white',
        margin: '10px auto auto auto',
        overflowY: 'scroll',
        height: '60vh'
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
    }
    return(
        <>
            <div style={StyledObject.mainMenu}>
                        <table style={{width: '100%'}}>
                            <thead>
                                <th style={StyledObject.th}>Username</th>
                                <th style={StyledObject.th}>Meal Ordered</th>
                                <th style={StyledObject.th}>Date</th>
                                <th style={StyledObject.th}>Time</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                                <tr>
                                    <td style={StyledObject.td}>@ilesanmi</td>
                                    <td style={StyledObject.td}>Sharwama</td>
                                    <td style={StyledObject.td}>Sept 20,2021</td>
                                    <td style={StyledObject.td}>09:45</td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </>
    )
}

export default Menu;