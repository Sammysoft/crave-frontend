import React from "react";
import Home from "../Components/Home";
import Sections from "../Components/Home/Sections";
import { StyledObject } from "../Components/StyleObject";





const Homepage = () =>{
    return(
        <>
        <div style={StyledObject.homeBodySection}>
                <Home />
               <Sections />
               </div>

        </>
    )
}

export default Homepage;