import React, { useState, useEffect } from "react";
import { StyledObject } from "../../../StyleObject";
import axios from "axios";
import url from "../../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { category } from "../../../categories";
let api = url.api;

const Menu = () => {
  //details to make the addMeal API endpoint
  const [storename, setStorename] = useState("");

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

  const token = localStorage.getItem("token");
  let Navigate = useNavigate();

  useEffect(() => {
    fetch(`${api}merchant/dashboard`, {
      headers: {
        Authorization: token,
      },
    }).then(async (res) => {
      let response = await res.json();
      console.log(response);
      setStorename(response.data.storename);
    });
  }, []);

  const addMeal = () => {
    let store = storename;
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
      store,
    };
    axios
      .post(`${api}merchant/meal/add/`, payload)
      .then((res) => {
        Navigate("/lists");
        console.log(res.data.data);
        Swal.fire({
          title: "Done",
          icon: "success",
          text: res.data.data,
        });
      })
      .catch((error) => {
        Swal.fire({
          text: "Oops!",
          icon: "warning",
          text: error,
        });
      });
  };

  return (
    <>
      <div style={StyledObject.dashWrap}>
        <div style={StyledObject.dashboardMenu}>
          <div style={StyledObject.addMeal}>
            <span style={StyledObject.addMealText}>Add a Meal</span>
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
                {/* <input
                  type="text"
                  name="category"
                  //   value={category}
                  //   onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: "100%",
                    border: "1px solid grey",
                    borderStyle: "dotted",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                /> */}
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
              addMeal();
            }}
          >
            Add a meal
          </span>
        </div>
      </div>
    </>
  );
};

export default Menu;
