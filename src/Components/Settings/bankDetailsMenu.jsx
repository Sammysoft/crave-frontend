import React, { useState, useEffect } from "react";
import { StyledObject } from "../StyleObject";
import { css } from '@emotion/react';
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import plus from '../Dashboard/MenuList/svg/plus.svg';
import trash from '../Dashboard/MenuList/svg/trash.svg';
import axios from "axios";
import Swal from 'sweetalert2';
import url from '../config';
let api = url.api



const override = css`
  display: block;
  margin: 0 auto;
//   border-color: red;
`;

const AccountButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: right;
align-items: right;
height: fit-content;
margin-bottom: 10px;
`

const ContentWrapper = styled.div`
padding: 5px;
`

const NewBankAccount = styled.div`
width: 30%;
margin: 5vh;
background-color: #FEB52E;
color: #BD0000;
text-align: center;
padding: 5px;
border-radius: 4px;
cursor: pointer;
`

const BankFormHead = styled.div`
width: 100%;
padding: 1vh 5vh;
`







const BankDetailsMenu=({ bankdetails, storename })=>{
    let store = storename;
    const  [form, setForm] = useState(false);
    const [bankname, setBankName] = useState('');
    const [accountname, setAccountName] = useState("");
    const [accountnumber, setAccountNumber] = useState('');
    const [isPrimary, setIsPrimary] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    let [color, setColor] = useState("#DB0000");

    const _checkChecked = ( e )=>{
        const checked = e.target.checked;
        if(checked){
            setIsPrimary(true)
        }else{
            setIsPrimary(false)
        }
    }




    const addBankDetails = ()=>{

        setIsLoading(true)
        const payload = {
           bankname, accountname, accountnumber, isPrimary, store
        }

        axios.post(`${api}merchant/settings/bank`, payload)
            .then(res=>{
                setForm(false)
                Swal.fire({
                    icon: 'success',
                    timer: 2000,
                    text: res.data.msg
                })
                setIsLoading(false)
            }).catch(error=>{
                Swal.fire({
                    icon: 'warning',
                    text: error.response.data.msg,
                    title: "Oops!"
                })
            })
    }

    return(
        <>
       {
           form ? <>

            <div style={StyledObject.storeMenu}><br/>
               <ContentWrapper>
                   <BankFormHead>
                       <span style={{display: 'flex', flexDirection:"row", justifyContent: "space-between", width: "100%", padding: "3vh"}}>
                          <span> <span style={{color: "#717171", fontWeight: "700", fontSize: "18px"}}>Bank Details</span> <i>(Enter bank details)</i></span>
                          <span onClick={()=>{setForm(false)}}><img src={'/assets/img/close.png'} alt="close icon" /></span>
                          </span>

                          <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Bank Name
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="bankname" value={bankname} onChange={(e)=>{setBankName(e.target.value)}}/>
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Account Number
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="accountnumber" value={accountnumber} onChange={(e)=>{setAccountNumber(e.target.value)}}/>
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Account Name
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="accountname" value={accountname} onChange={(e)=>{setAccountName(e.target.value)}}/>
                            </span>
                        </div>
                        <div style={{padding: '0px 30px'}}>
                        <span style={{fontSize: "16px", color: "#717171", fontFamily: "Nunito"}}>
                              <input type="checkbox" name="isPrimary" value={isPrimary} onClick={(e)=>{_checkChecked(e)}}/> Set as primary account
                        </span>
                    </div>

                        <AccountButtonWrapper>
                            <NewBankAccount onClick={()=>{addBankDetails()}}>Add Bank Account <img src={plus} alt="plus icon" /></NewBankAccount>
                        </AccountButtonWrapper>
                   </BankFormHead>
               </ContentWrapper>
            </div>

           </>:<>
           <div style={StyledObject.storeMenu}><br/>
               <ContentWrapper>
               <AccountButtonWrapper>
                 <NewBankAccount onClick={()=>{setForm(true)}}>New Bank Account <img src={plus} alt="plus icon" /></NewBankAccount>
               </AccountButtonWrapper>
               <table style={{width: '90%', margin: 'auto'}}>
                            <thead style={StyledObject.thead}>
                                <th style={StyledObject.th}>Bank</th>
                                <th style={StyledObject.th}>Account Number</th>
                                <th style={StyledObject.th}>Account Name </th>
                                <th  style={StyledObject.th}></th>
                            </thead>

                            {isLoading ? <>
                                <div style={{width: '100vw', height: '100vh', justifyContent: "center", alignItems: 'center', display: 'flex', position:"relative"}}>
                                <ClipLoader color={color} loading={isLoading} css={override} size={150} />
                                </div>
                            </>:<>
                            <tbody>
                                {bankdetails.length !==0 ?
                                <>
                                {bankdetails.map((info, key)=>{
                                    return(
                                        <>
                                        <tr style={StyledObject.tr}>
                                            <td style={info.isPrimary == true ? {color: '#BD0000', padding: '10px', } : {  padding: '10px', textAlign:'justify', color: 'black'}}>{info.bankname}</td>
                                            <td style={info.isPrimary == true ? {color: '#BD0000', padding: '10px', } : {  padding: '10px', textAlign:'justify', color: 'black'}}>{info.accountnumber}</td>
                                            <td style={info.isPrimary == true ? {color: '#BD0000', padding: '10px', } : {  padding: '10px', textAlign:'justify', color: 'black'}}>{info.accountname}</td>
                                            <td style={StyledObject.td}><img src={trash} alt="trash icon" /></td>
                                        </tr>
                                         <tr style={StyledObject.tr}></tr>
                                        </>
                                    )


                                })}
                                </>:<>
                                    <tr>
                                     <td colSpan={4}>
                                     <div style={{width: "100%", height: "30vh", display: 'flex', justifyContent:"center", alignItems:"center"}}>
                                           <span style={{fontWeight: "200"}}> No Bank Account Yet</span>
                                        </div>
                                     </td>
                                    </tr>
                                </>
                            }
                        </tbody>
                            </>}
                      
                        </table>
               </ContentWrapper>
            </div>
           </>
       }


        </>
    )
}
export default BankDetailsMenu;