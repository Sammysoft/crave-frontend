import React from "react";
import { StyledObject } from "../Components/StyleObject";

const ErrorPage=()=>{
    return(
        <>
            <div  style={StyledObject.centerDiv}>
                <div style={StyledObject.contentCenterDiv}>
                Error 404<br/> Page doesn't exist
                </div>
            </div>
        </>
    )
}

export default ErrorPage;