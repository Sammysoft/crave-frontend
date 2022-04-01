import React from "react";
import NavBar from "../NavBar/Navbar";
import LeftBar from "../LeftBar";
import Menu from "./Menu";
import AddMealButton from "./add-meal-button";
import CategoryButton from './category-button';

const MenuList=()=>{
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
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            height: '20vh'
        }
    }
    return(<>
   <div style={StyleObject.dashboardWrapper}>
                <LeftBar />
                <div style={StyleObject.rightbarWrapper}>
                        <NavBar page="Menu List" addmeal={<AddMealButton />} category={<categoryButton />}/>
                        <Menu />
                </div>
            </div>
    </>)
}

export default MenuList;