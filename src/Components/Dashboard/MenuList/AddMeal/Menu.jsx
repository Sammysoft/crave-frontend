import React, { useState, useEffect, useRef } from "react";
import { StyledObject } from "../../../StyleObject";
import axios from "axios";
import url from "../../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { category } from "../../../categories";
import { storage } from "../../../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";
let api = url.api;

const Menu = () => {
  const inputRef = useRef();

  const uploadFile = () => {
    if (pickFile == null) {
      return null;
    } else {
      const imageRef = ref(getStorage(), `images/${pickFile.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, pickFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          Swal.fire({
            icon: "error",
            text: "Sorry, could not add image picture, try again later",
            title: "Oops!",
          });
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            Swal.fire({
              icon: "success",
              text: "Successfully uploaded your profile picture",
              title: "Image Uploaded To The Cloud",
              timmer: 1500,
              position: "top-right",
            });
            setMealImage(downloadURL);
          });
        }
      );
    }
  };

  //details to make the addMeal API endpoint
  const [storename, setStorename] = useState("");

  //details for the meals
  const [mealname, setMealName] = useState("");
  const [mealimage, setMealImage] = useState(null);
  const [description, setMealDescription] = useState("");
  const [mealincredients, setMealIncredients] = useState("");
  const [price, setPrice] = useState("");
  const [stockcount, setStockCount] = useState("");
  const [size, setSize] = useState("");
  const [selectedCategory, setCategory] = useState("Meal");
  const [tags, setTags] = useState("");
  const [itemunit, setItemUnit] = useState("");
  const [pickFile, setPickFile] = useState(null);

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
      mealimage,
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
        Navigate("/lists/");
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
          text: error.reponse.data.msg,
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
                <div
                  style={{
                    width: "55%",
                    height: "100%",
                    border: "1px solid black",
                    borderStyle: "dotted",
                    textAlign: "center",
                    alignItems: "center",
                    backgroundImage: `url(${mealimage})`,
                    backgroundPosition: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <div
                    style={StyledObject.chooseButton}
                    onClick={() => inputRef.current.click()}
                  >
                    Choose
                  </div>
                  <input
                    ref={inputRef}
                    style={{ display: "none" }}
                    type="file"
                    accept="application/multipart"
                    id="customeFile"
                    onChange={(event) => setPickFile(event.target.files[0])}
                    name="storeLogo"
                  />
                  <input
                    style={{ display: "none" }}
                    type="text"
                    id="customeFile"
                    value={mealimage}
                    name="storeLogo"
                  />
                </div>
                <span style={{ color: "#FEC72E" }} onClick={() => uploadFile()}>
                  Upload
                </span>
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
