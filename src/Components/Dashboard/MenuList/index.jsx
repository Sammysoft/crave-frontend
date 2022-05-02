import React ,{ useEffect,useState } from "react";
import NavBar from "../NavBar/Navbar";
import LeftBar from "../LeftBar";
import Menu from "./Menu";
import AddMealButton from "./add-meal-button";
import url from '../../config';
let api = url.api

const MenuList=()=>{

    let token = localStorage.getItem('token')
    const [storename, setStorename] = useState('');

    useEffect(()=>{
        fetch(`${api}merchant/dashboard`, {
            headers:{
                Authorization: token
            }
        }).then(async res => {
            let response = await res.json()
            console.log(response)
            setStorename(response.data.storename)
        })
    },[])


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
                        <NavBar page="Menu List" addmeal={<AddMealButton />}/>
                        <Menu storename={storename}/>
                </div>
            </div>
    </>)
}

export default MenuList;