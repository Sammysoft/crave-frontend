import React, { useState, useEffect } from "react";
import LeftBar from "../LeftBar";
import NavBar from "../NavBar/Navbar";
import Menu from "./Menu";
import { StyledObject } from "../../StyleObject";
import { useLocation }from 'react-router-dom';
import { useNavigate } from "react-router";
import { category } from "../../categories";
import axios from 'axios';
import url from '../../config';
import Swal from 'sweetalert2'
let api = url.api



const UpdateMeal = (  ) => {
  const location = useLocation();

    useEffect(()=>{
      const idFromUrl = location.pathname.toString();
      const extractedId = idFromUrl.substr(idFromUrl.length-24, 24)
      axios.get(`${api}merchant/meal/getMealToUpdate/${extractedId}`)
        .then(res => {
            setCategory(res.data.data.category)
            setMealName(res.data.data.mealname)
            setMealIncredients(res.data.data.mealincredients)
            setStockCount(res.data.data.stockcount)
            setTags(res.data.data.tags)
            setSize(res.data.data.size)
            setItemUnit(res.data.data.itemunit)
            setMealDescription(res.data.data.description)
            setPrice(res.data.data.price)
            setStoreName(res.data.data.store)
            setStoreId(res.data.data._id)
        }).catch(error => {
            console.log(error);
            Swal.fire({      
                icon: 'warning',
                text: error.response.data.msg,
                title: 'Oops!, Something went wrong'
            })
        })
  },[])
  //details for the meals
  const [mealname, setMealName] = useState("");
  const [mealpicture, setMealPicture] = useState("");
  const [description, setMealDescription] = useState("");
  const [mealincredients, setMealIncredients] = useState("");
  const [price, setPrice] = useState("");
  const [stockcount, setStockCount] = useState("");
  const [size, setSize] = useState("");
  const [selectedCategory, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [itemunit, setItemUnit] = useState("");
  const [storename, setStoreName] = useState("");
  const [storeid, setStoreId]= useState("");


  const token = localStorage.getItem("token");
  let Navigate = useNavigate();
  const payloadPath = useLocation().pathname;
  console.log(payloadPath)

const updateMeal = () =>{
   const payload = {
      mealname,
      description,
      price,
      tags,
      itemunit,
      stockcount,
      category: selectedCategory,
      size,
      mealincredients,

    };
    axios
      .post(`${api}merchant${payloadPath}`, payload)
      .then((res) => {
        Navigate("/lists/");
        Swal.fire({
          title: "Done",
          icon: "success",
          text: `${res.data.data.mealname} has been updated succesfully!`,
        })
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          icon: "warning",
          text: error.response.data.msg,
        });
      });
    }


   

  return (
    <>
      <div style={StyledObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyledObject.rightbarWrapper}>
          <NavBar page="Menu List" />

      <div style={StyledObject.dashWrap}>
        <div style={StyledObject.dashboardMenu}>
          <div style={StyledObject.addMeal}>
            <span style={StyledObject.addMealText}>Update Meal</span>
            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Meal Name:</span>
              <span style={StyledObject.inputField}>
                <input
                  type="text"
                  name="mealname"
                  value={mealname}
                  onChange={(e) => setMealName(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    borderStyle: "dotted",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                />
              </span>
            </div>

            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Meal Picture:</span>
              <span style={StyledObject.choosePicture}>
                <div style={StyledObject.imageWrapper}>
                  <div style={StyledObject.chooseButton}>Choose</div>
                </div>
                <span style={{ color: "#FEC72E" }}>Change</span>
              </span>
            </div>

            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Description:</span>
              <span style={StyledObject.inputFieldTextArea}>
                <textarea
                  name="mealdesciption"
                  value={description}
                  onChange={(e) => setMealDescription(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    borderStyle: "dotted",
                    borderRadius: "5px",
                    padding: "10px",
                    height: "20vh",
                  }}
                ></textarea>
              </span>
            </div>

            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Meal Incredients:</span>
              <span style={StyledObject.inputFieldTextArea}>
                <textarea
                  name="incredients"
                  value={mealincredients}
                  onChange={(e) => setMealIncredients(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    borderStyle: "dotted",
                    borderRadius: "5px",
                    padding: "10px",
                    height: "20vh",
                  }}
                ></textarea>
              </span>
            </div>

            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Price:</span>
              <div style={StyledObject.bottomInputWrapper}>
                <span style={StyledObject.inputField}>
                  <input
                    type="text"
                    name="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{
                      width: "100%",
                      border: "1px solid grey",
                      borderStyle: "dotted",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                </span>
                <div style={StyledObject.bottomInputWrapper}>
                  <span style={StyledObject.inputLabel}>Stock Count:</span>
                  <span style={StyledObject.inputField}>
                    <input
                      type="number"
                      name="stockcount"
                      value={stockcount}
                      onChange={(e) => setStockCount(e.target.value)}
                      style={{
                        width: "100%",
                        border: "1px solid grey",
                        borderStyle: "dotted",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Size:</span>
              <div style={StyledObject.bottomInputWrapper}>
                <span style={StyledObject.inputField}>
                  <input
                    type="text"
                    name="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    style={{
                      width: "100%",
                      border: "1px solid grey",
                      borderStyle: "dotted",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                </span>
                <div style={StyledObject.bottomInputWrapper}>
                  <span style={StyledObject.inputLabel}>Item Unit:</span>
                  <span style={StyledObject.inputField}>
                    <input
                      type="text"
                      name="itemunit"
                      value={itemunit}
                      onChange={(e) => setItemUnit(e.target.value)}
                      style={{
                        width: "100%",
                        border: "1px solid grey",
                        borderStyle: "dotted",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={StyledObject.category}>
            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Category:</span>
              <span style={StyledObject.inputField}>
                <select
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    borderStyle: "dotted",
                    borderRadius: "5px",
                    padding: "10px",
                    backgroundColor: "transparent",
                  }}
                  value={selectedCategory}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  {category.map((item, id) => {
                    return (
                      <option
                        key={id}
                        value={item}
                        style={{
                          width: "100%",
                          border: "1px solid grey",
                          borderStyle: "dotted",
                          borderRadius: "5px",
                          padding: "10px",
                        }}
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              </span>
            </div>

            <div style={StyledObject.inputWrapper}>
              <span style={StyledObject.inputLabel}>Tags:</span>
              <span style={StyledObject.inputField}>
                <textarea
                  type="text"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    borderStyle: "dotted",
                    borderRadius: "5px",
                    padding: "10px",
                    height: "20vh",
                  }}
                ></textarea>
              </span>
            </div>
          </div>
        </div>
        <div style={StyledObject.addMealWrapper}>
          <span
            style={StyledObject.buttonStyle}
            onClick={() => {
              updateMeal();
            }}
          >
            Update Meal
          </span>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};


export default UpdateMeal;
