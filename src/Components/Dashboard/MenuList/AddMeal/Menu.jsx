import React from "react";
import { StyledObject } from "../../../StyleObject";



const Menu =()=>{
    return(<>
        <div style={StyledObject.dashWrap}>
          <div style={StyledObject.dashboardMenu}>

          <div style={StyledObject.addMeal}>
                    <span style={StyledObject.addMealText}>Add a Meal</span>
                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Meal Name:</span>
                        <span style={StyledObject.inputField}><input type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px'}} /></span>
                    </div>

                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Meal Picture:</span>
                        <span style={StyledObject.choosePicture}>
                                    <div style={StyledObject.imageWrapper}>
                                        <div style={StyledObject.chooseButton}>Choose</div>
                                    </div>
                                    <span style={{color: '#FEC72E'}}>
                                        Change
                                    </span>
                        </span>
                    </div>


                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Description:</span>
                        <span style={StyledObject.inputFieldTextArea}><textarea name="mealdesciption" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px', height: '20vh'}}></textarea></span>
                    </div>

                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Meal Incredients:</span>
                        <span style={StyledObject.inputFieldTextArea}><textarea name="mealdesciption" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px', height: '20vh'}}></textarea></span>
                    </div>

                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Price:</span>
                        <div style={StyledObject.bottomInputWrapper}>
                        <span style={StyledObject.inputField}><input type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px'}} /></span>
                            <div style={StyledObject.bottomInputWrapper}>
                            <span style={StyledObject.inputLabel}>Stock Count:</span>
                              <span style={StyledObject.inputField}><input type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px'}} /></span>
                            </div>
                        </div>
                    </div>

                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Size:</span>
                        <div style={StyledObject.bottomInputWrapper}>
                        <span style={StyledObject.inputField}><input type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px'}} /></span>
                            <div style={StyledObject.bottomInputWrapper}>
                            <span style={StyledObject.inputLabel}>Item Unit:</span>
                              <span style={StyledObject.inputField}><input type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px'}} /></span>
                            </div>
                        </div>
                    </div>
              </div>
              <div style={StyledObject.category}>
                <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Category:</span>
                        <span style={StyledObject.inputField}><input type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px'}} /></span>
                    </div>

                    <div style={StyledObject.inputWrapper}>
                        <span style={StyledObject.inputLabel}>Tags:</span>
                        <span style={StyledObject.inputField}><textarea type="text" name="mealname" style={{width: '100%', border: '1px solid grey', borderStyle: 'dotted', borderRadius: '5px', padding: '10px', height: '20vh'}}></textarea></span>
                    </div>




              </div>


        </div>
        <div style={StyledObject.addMealWrapper}>
        <span style={StyledObject.buttonStyle} >
                    Add a meal
                </span>
        </div>
        </div>
    </>)
}

export default Menu;