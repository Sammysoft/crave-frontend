import React from 'react';
import tag from './svg/tag.svg'

const ProductDetails=(props)=>{


    let StyleObject = {
        divWrapper:{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'space-between',
        },
            imgWrapper:{
                width: '30%',

            },
            textWrapper:{
                width: '60%',
                textAlign: "left",
                fontSize:''
            },
            firstText:{
                fontSize: '16px',
                fontWeight: '700'
            },
            secondText:{
                color: 'rgba(113, 113, 113, 1)',
                fontWeight: '400',
                fontSize: '16px'
            },
            thirdText:{
                    width: '70%',
                    color: 'rgba(113, 113, 113, 1)',
                    fontWeight: '400',
                    fontSize: '16px',
                    
            },
            otherThirdText:{
                    width: '30%',
                    color: 'rgba(113, 113, 113, 1)',
                    fontWeight: '400',
                    fontSize: '16px',

            },
            thirdTextWrapper:{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'space-between'
            }
    }
    return(
        <>
                <div style={StyleObject.divWrapper}>
                    <span style={StyleObject.imgWrapper}>
                        <img src={props.imgSrc} alt="image" height="90%" width="70%"  style={{borderRadius: '5px', position: 'relative'}}/>
                    </span>
                    <span style={StyleObject.textWrapper}>
                           <span style={StyleObject.firstText}>{props.firstText}</span><br/>
                            <span style={StyleObject.secondText}>N{props.secondText}</span><br/>
                            <span style={StyleObject.thirdTextWrapper}>
                                <span style={StyleObject.thirdText}>
                                    <img src={tag} alt="tag" /> {props.thirdText}
                                </span>
                                <span style={StyleObject.otherThirdText}>Ratings</span>
                            </span>
                    </span>
                </div>
        </>
    )
}

export default ProductDetails;