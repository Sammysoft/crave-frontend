import React from "react";
import { StyledObject } from "./StyleObject";
import chat from './Dashboard/MenuList/svg/chat.svg';
const Messages =(props)=>{
    return(
        <>
                <div style={StyledObject.messagesWrapper}>
                    <span style={StyledObject.messages}>
                            <img src={chat} alt="chat-icon" />
                    </span>
                </div>
        </>
    )
}
export default Messages;