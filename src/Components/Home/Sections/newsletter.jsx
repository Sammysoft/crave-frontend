import React from "react";
import { StyledObject } from "../../StyleObject";
import styled from "styled-components";

const Newsletter =()=>{

const SubscribeText = styled.span`
       background-image: linear-gradient(50deg,rgba(189, 0, 0, 1), rgba(254, 181, 46, 1));
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border: 1px solid #BD0000;
        backrgound: #FAFAFB;
        border-radius: 5px;
        padding: 5px 15px;
`

    return(

        <><br/><br/><br/>
            <div style={StyledObject.weOfferHeader}>
                <span style={{fontWeight: '700', fontSize: '1.5rem'}}>Subscribe to our <span style={{color: '#FEB52E'}}>NewsLetter</span></span>
                </div>
            <div style={StyledObject.searchBarWrapper}>
                <input style={StyledObject.searchInput} type="text" name="search"  />

                        <SubscribeText>Subscribe</SubscribeText>

           </div>
        </>
    )
}

export default Newsletter;