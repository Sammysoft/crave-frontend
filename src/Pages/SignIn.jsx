import React from "react";
import NavBar from "../Components/Home/navbar";
import Footer from "../Components/Home/Sections/footer";
import Auth from "../Components/onboarding/auth";



const SignIn = (props)=>{


    return(
        <>
        <NavBar />
        <Auth />
        <Footer />
        </>
    )
}
export default SignIn;