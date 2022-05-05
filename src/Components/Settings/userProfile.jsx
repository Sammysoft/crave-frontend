import React, { useState, useEffect } from "react";
import NavBar from '../Dashboard/NavBar/Navbar';
import { StyledObject } from "../StyleObject";
import LeftBar from "../Dashboard/LeftBar";
import Menu from './userProfileMenu';
import axios from "axios";
import url from '../config';
let api = url.api;



const UserProfile=(  )=>{
    let token = localStorage.getItem('token');
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber ] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    useEffect((  )=>{
        axios.get(`${api}merchant/dashoard`, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            console.log(res.data.data);
            setFullName(res.data.data.profile.fullname);
            setId( res.data.data._id );
            setPhoneNumber( res.data.data.profile.phonenumber );
            setEmail( res.data.data.profile.email );
            setPassword( res.data.data.password );
        })
    })

    return(
        <>
            <div style={StyledObject.dashboardWrapper}>
                <LeftBar />
                <div style={StyledObject.rightbarWrapper}>
                        <NavBar page="User Profile"/>
                        <Menu id={ id } password={ password } email={email}  fullname={fullname} phonenumber={phonenumber}/>
                </div>
            </div>
        </>
    )
}

export default UserProfile;