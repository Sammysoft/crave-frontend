import React from 'react';
import Messages from '../../messages'

let StyleObject = {
    dashboardNav: {
        fontFamily: 'Nunito',
        color: '#1A1A19',
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        padding: '3%',
        boxShadow: '3px 4px 6px  #888888'

    },
    button:{
        color: '#FEB52E',
        padding: '5px 15px 5px 15px',
        borderRadius: '5px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #BD0000',
        backgroundImage: 'linear-gradient(50deg,rgba(189, 0, 0, 1), rgba(254, 181, 46, 1))',
        backgroundSize: '100%',
        backgroundRepeat: 'repeat',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',


    },
    left:{
        flex: 4,
        fontWeight: '900',

    },
    right:{
            flex: 2,
            right: '20px',
            width: '50%',
    },
    wrap:{
        display: 'flex',
        flexDirection:'row',
        alignItems: 'flex-start',
        width: '100%',


    },
    btnWrapper:{
        float: 'left'
    }
}

const NavBar =(props)=>{

    return(
        <>
            <Messages />
            <div style={StyleObject.dashboardNav}>
                <span style={StyleObject.wrap}>
                    <span style={StyleObject.left}>

                    <span> <span style={{fontSize: '36px'}}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg> {props.page}</span></span>
                    </span>
                    <span style={StyleObject.right}>
                       <div style={StyleObject.btnWrapper}>
                          <span className="addmeal">{props.category}</span>
                     <span className="addmeal">  {props.addmeal}</span>
                            <button style={StyleObject.button} >Go to storefront <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg></button>
                                <svg style={{paddingLeft: '10px'}} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                </svg>
                       </div>
                    </span>

                </span>

            </div>
        </>
    )
}

export default NavBar;