import React from 'react';
import { StyledObject } from '../../StyleObject';
import WeOfferItem from './WeOfferItem';
import url from '../../assets/head1.png'
import url2 from '../../assets/head2.png'
import url3 from '../../assets/head3.png'
import url4 from '../../assets/head4.png'


const Offer =(props)=>{

    var body =[
        {
            id: 1,
            title: "Table Reservation",
            content: "make reservations before you get to your destination",
            url: url
        },
        {
            id: 2,
            title: "Increased Customer Base",
            content: `from your neighbourhood to Abuja spot the burger and fries you crave,
                            choose from a variety of well known restaurants across the nation`,
             url: url2
        },
        {
            id: 3,
            title: "Good food, Good mood",
            content: `from your neighbourhood to Abuja spot the burger and fries you crave,
                            choose from a variety of well known restaurants across the nation`,
            url: url3
        },
        {
            id: 4,
            title: "No more wait list",
            content: "make reservations before you get to your destination",
            url: url4
        },

]
    return(
        <>

                <div style={StyledObject.weOfferHeader}>
                <span style={{fontWeight: '700', fontSize: '1.5rem'}}>What we <span style={{color: '#FEB52E'}}>Offer</span></span>
                </div>

                <div style={StyledObject.weOfferItems}>
                        <WeOfferItem
                            body={body}
                        />
                </div>

        </>
    )
}

export default Offer;