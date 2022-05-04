import React, { useState, useEffect } from "react";
import NavBar from '../Dashboard/NavBar/Navbar';
import { StyledObject } from "../StyleObject";
import LeftBar from "../Dashboard/LeftBar";
import Menu from './bankDetailsMenu';
import axios from 'axios';
import url from '../config';
let api = url.api




const BankDetails=()=>{
        const token = localStorage.getItem('token');
        const [storename, setStoreName] = useState('');
        const [bankdetails, setBankDetails] = useState([]);


        useEffect(()=>{
            axios.get(`${api}merchant/dashboard`, {
                headers :{
                    Authorization: token
                }
            }).then(res=>{
                setBankDetails(res.data.data.bankdetails)
                setStoreName(res.data.data.storename)
            })
        },[bankdetails])

    return(
        <>
            <div style={StyledObject.dashboardWrapper}>
                <LeftBar />
                <div style={StyledObject.rightbarWrapper}>
                        <NavBar page="Bank Details"/>
                        <Menu storename={storename} bankdetails={bankdetails}/>
                </div>
            </div>
        </>
    )
}

export default BankDetails;