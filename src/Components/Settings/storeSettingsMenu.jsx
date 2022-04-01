import React from "react";
import { StyledObject } from "../StyleObject";

const Menu =()=>{
    return(
        <>
               <div style={StyledObject.storeMenu}><br/>
                        <span style={StyledObject.storeMenuContentWrapper}>
                            <b>Store Information:</b> <i>(Fill in your store details)</i>
                        </span>
                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Store Name
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="storeName" />
                            </span>
                        </div>
                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}><br/>
                                Store Logo
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <span style={StyledObject.storeMenuChooseFileButton}>Choose file</span><br/>
                                <input style={StyledObject.storeMenuInputField} type="text" name="storeName" /><br/>
                                <div style={StyledObject.storeMenuLogoPicker}>
                                        <span style={StyledObject.storeMenuLogoDisplay}></span>
                                        <span style={{color: '#717171', fontWeight: '400', padding: '10px'}}>Current Logo</span>
                                        <span style={{color: '#FEC72E', fontWeight: '400', padding: '10px'}}>Remove</span>
                                </div>
                            </span>
                        </div>
                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Description:
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <textarea style={StyledObject.storeMenuTextAreaField}type="text" name="storeName"></textarea>
                            </span>
                        </div>
                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Tag Line:
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="storeName" />
                            </span>
                        </div>
                        <div style={StyledObject.storeMenuContentFields}>
                            <span style={StyledObject.storeMenuFirstField}>
                                Location:
                            </span>
                            <span style={StyledObject.storeMenuSecondField}>
                                <input style={StyledObject.storeMenuInputField}type="text" name="storeName" />
                            </span>
                        </div>
                        <div style={StyledObject.storeMenuSaveSettingsWrapper}>
                            <span style={StyledObject.storeMenuSaveSettingsButton}>Save Settings</span>
                        </div>
               </div>
        </>
    )
}
export default Menu;