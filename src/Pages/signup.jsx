import React from "react";
import { StyledObject } from "../Components/StyleObject";
import styled from 'styled-components';
import NavBar from "../Components/Home/navbar";
import Footer from "../Components/Home/Sections/footer";
import Onboard from "../Components/onboarding";



const SignUp = (props)=>{


    return(
        <>
        <NavBar />
        <Onboard />
        <Footer />
        </>
    )
}
export default SignUp;