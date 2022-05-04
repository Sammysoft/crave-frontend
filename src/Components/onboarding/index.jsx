import React, { useState } from "react";
import styled from "styled-components";
import { StyledObject } from "../StyleObject";
import image from '../assets/signup.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { css } from '@emotion/react';
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import Swal from 'sweetalert2';
import url from "../config";
let api = url.api;



const override = css`
  display: block;
  margin: 0 auto;
//   border-color: red;
`;


let RegisterWrapper = styled.div`
width: 100%;
height: 70vh;
`


const TextWrap = styled.div`
background: linear-gradient(101.63deg, #BD0000 -26.55%, #FEB52E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
font-weight: 700;
line-height: 49px;
width: fit-content;
margin: 0px 0px 20px 0px;
font-size: 36px;
`

const SimpleText = styled.div`
background: linear-gradient(101.63deg, #BD0000 -26.55%, #FEB52E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
width: 50%;
padding: 50px 80px;
width: fit-content;
`

const SimpleText2 = styled.div`
color: #BD0000;
font-family: Nunito;
width: 90%;
padding: 50px 80px;
width: fit-content;
`
const LoginButton = styled.span`
padding: 5px;
margin: 5px;
border: 1px solid #FEB52E;
border-radius: 5px;
color: #BD0000;

`
const FormWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: space-between;
paddingLeft: 50px;
`

const LeftSide = styled.div`
width: 50%;
justify-content: left;
`

const RightSide = styled.div`
width: 30%;
justify-content: left;
`
    const SizedBox = styled.div`
    box-shadow: 0px 4px 10px 4px rgba(121, 121, 130, 0.15);
    border-radius: 10px;
    width: 100%;
    height: 30vh;
    align-items: center;
    text-align: center
    font-family: Nunito;
    display: flex;
    justify-content: center;
    `

const WorkHours = styled.div`
display: flex;
justfiy-content: space-between;
margin: auto;
width: 80%;
`



const Onboard = ()=>{
    let Navigate = useNavigate()

const [storename, setStorename ] = useState("");
const [storedescription, setStoreDescription ] = useState("");
const [storelocation, setStorelocation ] = useState("");
const [careline1, setCareline1 ] = useState("");
const [careline2, setCareline2 ] = useState("");
const [storetagline, setStoretagline ] = useState("");
const [storemail, setStoremail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false)
let [color, setColor] = useState("#DB0000");


const submitData =(e)=>{
    setIsLoading(true)
const data = {
    storename,
    storedescription,
    storelocation,
    storetagline,
    careline1,
    careline2,
    storemail,
    password
}

    axios.post(`${api}merchant/signup`, data)
        .then(err =>{
            Navigate('/merchant/auth')
            setIsLoading(false)
            Swal.fire({
                icon: 'success',
                text: "Store is created on Crave, You can login to complete your account setup",
                title: "Success"
            })

        })

}

    return(
        <>
        {isLoading ?
                <>
                   <div style={{width: '100vw', height: '100vh', justifyContent: "center", alignItems: 'center', display: 'flex', position:"relative"}}>
                   <ClipLoader color={color} loading={isLoading} css={override} size={150} />
                   </div>
                </> :
                <>
                    <RegisterWrapper>
                            <img src={image} alt="display-pic" height="100%" width="100%"/>
                    </RegisterWrapper>
                    <div style={{backgroundColor: 'transparent', width: '90%', margin: 'auto', height: "auto", padding: '100px 10px', fontFamily: 'Nunito'}}>
                        <TextWrap>Register your business with us</TextWrap>
                        <div style={StyledObject.formWrapper}>
                                <div style={{width: '90vw', margin : "auto", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <SimpleText><i>Fill in your business details</i></SimpleText>
                                <span style={{ width: "47%", display: "flex", alignItems: "center"}}><SimpleText2>Do you have an account with us?</SimpleText2><span style={{width: "30%"}}><LoginButton><Link style={{textDecoration: "none", textDecorationLine: "none", color: "#BD0000"}} to="/merchant/auth">Login</Link></LoginButton></span>
                                </span>
                                </div>

                    <FormWrapper>
                        <LeftSide>
                            <form>
                              <div style={StyledObject.storeMenuContentFields}>
                              <span style={StyledObject.storeMenuFirstField}>Store Name</span>
                                <input name="storename" type="text"  value={storename} onChange={(e)=>setStorename(e.target.value)} style={StyledObject.storeMenuInputField}/>
                              </div>

                              <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}><br/>
                                Store Logo
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <span style={StyledObject.storeMenuChooseFileButton}>Choose file</span><br/>
                                <span style={{fontWeight: '400'}}>________________________________________________</span><br/>
                                <div style={StyledObject.storeMenuLogoPicker}>
                                        <span style={StyledObject.storeMenuLogoDisplay}></span>
                                </div>
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Description:
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <textarea style={StyledObject.storeMenuTextAreaField} type="text" name="storedescription" value={storedescription} onChange={event => setStoreDescription(event.target.value)}></textarea>
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                              <span style={StyledObject.storeMenuFirstField}>Tag line</span>
                                <input type="text" name="storetagline" style={StyledObject.storeMenuInputField} value={storetagline} onChange={event => setStoretagline(event.target.value)}/>
                              </div>

                              <div style={StyledObject.storeMenuContentFields}>
                              <span style={StyledObject.storeMenuFirstField}>Location</span>
                                <input type="text" name="storelocation" style={StyledObject.storeMenuInputField} value={storelocation} onChange={event => setStorelocation(event.target.value)}/>
                              </div>


                        <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.storeMenuFirstField}>Care Line 1:</span>
                        <div style={StyledObject.bottomInputWrapper}>
                        <input type="text" name="careline1" style={StyledObject.storeMenuInputField2}  value={careline1} onChange={event => setCareline1(event.target.value)} />
                            <div style={StyledObject.bottomInputWrapper}>
                            <span style={StyledObject.inputLabel}>Care Line 2:</span>
                            <input style={StyledObject.storeMenuInputField2} type="text" name="careline2" value={careline2} onChange={event => setCareline2(event.target.value)}/>

                            </div>
                        </div>
                    </div>

                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.storeMenuFirstField}>Password:</span>
                        <div style={StyledObject.bottomInputWrapper}>
                        <input name="password" type="password"  style={StyledObject.storeMenuInputField}  value={password} onChange={event=> setPassword(event.target.value)}/>
                            <div style={StyledObject.bottomInputWrapper}>
                            <span style={StyledObject.inputLabel}>Email:</span>
                            <input  name="storemail" type="text" style={StyledObject.storeMenuInputField} value={storemail} onChange={event=> setStoremail(event.target.value)}/>

                            </div>
                        </div>
                    </div>


                   {/* <div><br/><br/>
                       <b>Business Hours:</b><br />
                       <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Monday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                <span><input style={StyledObject.daysInputField} /></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton} >Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>


                        <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Tuesday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton}>Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>


                        <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Wednesday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton}>Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>


                        <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Thursday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton}>Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>


                        <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Friday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton}>Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>


                        <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Saturday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton}>Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>


                        <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Sunday:
                            </div>
                            <div>
                            <span style={StyledObject.daysInputFieldWrapper}>
                                <span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span>-</span>
                                    <span><input style={StyledObject.daysInputField}/></span>
                                    <span style={StyledObject.closedButton}>Closed</span>
                                </span>
                            </span><br/>
                            </div>
                        </WorkHours>
                   </div> */}

                   
                   </form>
                        </LeftSide>
                        <RightSide>
                            <p>Upload your business registration document</p>
                            <SizedBox>
                            <div style={StyledObject.chooseFileButton}>Choose File</div>
                            </SizedBox>
                        </RightSide>
                    </FormWrapper>
                    <div style={{padding: '50px'}}>
                        <span style={{fontSize: "16px", color: "#717171", fontFamily: "Nunito", paddingLeft: "50px"}}>
                              <input type="checkbox"/> I agree, on behalf of my company, to the Crave for business terms and conditions, and i agree to Crave’s <span style={StyledObject.decoratedText}>Terms of Use</span> and <span style={StyledObject.decoratedText}>Privacy Policy.</span>
                        </span>
                    </div>
                    <span style={StyledObject.saveSettingsButton} type="submit" onClick={()=>{submitData()}}>Sign Up</span>
            </div>

        </div>

                </>
         }


        </>
    )







}

export default Onboard;