import React from "react";
import Menu from './Menu'
import LeftBar from "./LeftBar";
import NavBar from "./NavBar/Navbar";

let StyleObject = {
    dashboardWrapper:{
            fontFamily: 'Nunito',
            color: '#1A1A19',
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'Space-between',
            alignItems: 'flex-start',
            height: '100vh'
    },
    rightbarWrapper: {
        flex: 6,
        // display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: '20vh'
    }
}

const Dashboard = ()=>{
    return(
        <>
            <div style={StyleObject.dashboardWrapper}>
                <LeftBar />
                <div style={StyleObject.rightbarWrapper}>
                        <NavBar page="Dashboard"/>
                        <Menu />
                </div>
            </div>
        </>
    )
}

export default Dashboard;