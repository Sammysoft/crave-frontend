import React from "react";
import { StyledObject } from "../StyleObject";

const UserProfileMenu=()=>{
    return(
        <>
         <div style={StyledObject.storeMenu}><br/>
                        <span style={StyledObject.storeMenuContentWrapper}>
                            <b>General:</b> <i>(Set up your general profile details)</i>
                        </span><br/><br/>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Full Name
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="storeName" />
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Email
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField} type="email" name="Email" />
                            </span>
                            <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField2}>
                                Phone Number
                            </span>
                            <span style={StyledObject.storeMenuSecondField2}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="PhoneNumber" />
                            </span>
                        </div>
                        </div>


                        <span style={StyledObject.storeMenuContentWrapper}>
                            <b>Change Password:</b> <i>(Change your current password)</i>
                        </span><br/><br/>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Old Password
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="password" name="storeName" />
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                New Password
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="password" name="storeName" />
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Repeat New Password
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="password" name="storeName" />
                            </span>
                        </div>

                        <div style={StyledObject.storeMenuSaveSettingsWrapper}>
                            <span style={StyledObject.storeMenuSaveSettingsButton}>Save Settings</span>
                        </div>

            </div>


        </>
    )
}
export default UserProfileMenu;