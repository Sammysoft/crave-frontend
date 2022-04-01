import React from "react";
import { StyledObject } from '../../StyleObject';
import WeOfferItem from './WeOfferItem';
import url from '../../assets/head5.png'
import url2 from '../../assets/head6.png'
import url3 from '../../assets/head7.png'
import url4 from '../../assets/head8.png'


const Merchant =(props)=>{

    var body =[
        {
            id: 1,
            title: "Boost your visibility",
            content: "Crave helps you to make your brands known to customers, increase your reach and impact",
            url: url
        },
        {
            id: 2,
            title: "Increased Customer Base",
            content: `Crave helps you to make your brands known to customers, increase your reach and impact`,
             url: url2
        },
        {
            id: 3,
            title: "Increase you income",
            content: `Every tool and integration you need to streamline your operations.
                                from reservation and waitlists to shift planning and actionable insights`,
            url: url3
        },
        {
            id: 4,
            title: "Secured Payments Platform",
            content: `Every tool and integration you need to streamline your operations.
                              from reservation and waitlists to shift planning and actionable insights`,
            url: url4
        },

]
    return(
        <>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/><br/><br/>
        <div style={StyledObject.weOfferHeader}>
                <span style={{fontWeight: '700', fontSize: '1.5rem'}}>Register as a <span style={{color: '#FEB52E'}}>Merchant</span></span>
                </div>

                <div style={StyledObject.weOfferItems}>
                        <WeOfferItem
                            body={body}
                        />
                </div>
        </>
    )
}

export default Merchant;