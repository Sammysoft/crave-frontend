import React from "react";
import pencil from './svg/pencil.svg';
import trash from './svg/trash.svg'

const Action=()=>{

     let Style = {
         trash:{
                padding: '5px',
                margin: '5px',
                color: '#717171'
         },
         pencil:{
            padding: '5px',
            margin: '5px',
            color: '#717171'
         }
     }
    return(
    <>
            <span style={Style.pencil}><img src={pencil} alt="pencil" /></span>
            <span style={Style.trash}><img src={trash} alt="trash" /></span>
    </>
    )
}

export default Action;