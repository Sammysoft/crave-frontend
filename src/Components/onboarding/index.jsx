import React from "react";
import styled from "styled-components";
import { StyledObject } from "../StyleObject";
import image from '../assets/signup.png'
const Onboard = ()=>{

    let RegisterWrapper = styled.div`
    width: 100%,
    height: 70vh,

    `;


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
    padding: 50px 80px;
    width: fit-content;
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

    return(
        <>

        <RegisterWrapper>
                <img src={image} alt="display-pic" height="100%" width="100%"/>
        </RegisterWrapper>
        <div style={{backgroundColor: 'transparent', width: '90%', margin: 'auto', height: "auto", padding: '100px 10px',     fontFamily: 'Nunito'}}>
            <TextWrap>Register your business with us</TextWrap>
            <div style={StyledObject.formWrapper}>
                    <SimpleText><i>Fill in your business details</i></SimpleText>
                    <FormWrapper>
                        <LeftSide>
                              <div style={StyledObject.storeMenuContentFields}>
                              <span style={StyledObject.storeMenuFirstField}>Store Name</span>
                                <input name="storename" style={StyledObject.storeMenuInputField} />
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
                                <textarea style={StyledObject.storeMenuTextAreaField}type="text" name="storeName"></textarea>
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                              <span style={StyledObject.storeMenuFirstField}>Tag line</span>
                                <input name="tagline" style={StyledObject.storeMenuInputField} />
                              </div>

                              <div style={StyledObject.storeMenuContentFields}>
                              <span style={StyledObject.storeMenuFirstField}>Location</span>
                                <input name="location" style={StyledObject.storeMenuInputField} />
                              </div>


                        <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.storeMenuFirstField}>Customer care line:</span>
                        <div style={StyledObject.bottomInputWrapper}>
                        <input name="location" style={StyledObject.storeMenuInputField} />
                            <div style={StyledObject.bottomInputWrapper}>
                            <span style={StyledObject.inputLabel}>Email:</span>
                            <input name="location" style={StyledObject.storeMenuInputField} />

                            </div>
                        </div>
                    </div>


                   <div><br/><br/>
                       <b>Business Hours:</b><br />
                       <WorkHours>
                        <div style={StyledObject.daysWorkHours}>
                                Monday:
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
                   </div>
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
                    <span style={StyledObject.saveSettingsButton}>Save settings</span>
            </div>

        </div>

        </>
    )


}

export default Onboard;