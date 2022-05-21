import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { StyledObject } from "../StyleObject";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import styled from "styled-components";
import url from "../config";
import { storage } from "../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { v4 } from "uuid";
let api = url.api;
const override = css`
  display: block;
  margin: 0 auto;
  //   border-color: red;
`;

const WorkHours = styled.div`
  display: flex;
  justfiy-content: space-between;
  width: 80%;
  margin: auto;
`;

const CheckBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: auto;
  width: 85%;
  color: "#717171";
`;
const CheckBox1 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  margin: auto;
  width: 70%;
  color: "#717171";
`;
const SizedBox = styled.div`
box-shadow: 0px 4px 10px 4px rgba(121, 121, 130, 0.15);
border-radius: 10px;
width: 100%;
height: 30vh;
align-items: center;
text-align: center
font-family: Nunito;
display: flex;
justify-content: center;
background-color: white;
`;

const RightSide = styled.div`
  width: auto;
  justify-content: left;
  background-color: "#FFFFFF";
  margin-top: 20px;
`;

const Menu = ({
  storename,
  storetagline,
  storeid,
  storedescription,
  storelocation,
  storeprofileimage,
}) => {
  const inputRef = useRef();
  const uploadDoc = useRef();

  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isLoadingDocument, setIsLoadingDocument] = useState(false);
  const [store, setStoreName] = useState();
  const [storedocument, setStoreDocument] = useState(null);
  const [pickDoc, setPickDoc] = useState(null);
  const [storeupdatedprofileimage, setStoreProfileImage] =
    useState(storeprofileimage);
  const [storeupdatedtagline, setStoreTagLine] = useState(storetagline);
  const [storeupdateddescription, setStoreDescription] =
    useState(storedescription);
  const [storeupdatedlocation, setStoreLocation] = useState(storelocation);
  const [loading, setLoading] = useState(false);
  const [pickFile, setPickFile] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  const [amenities, setAmenities] = useState({ amenity: [] });

  //business hours
  const [monday, setMonday] = useState("");
  const [mondayclose, setMondayClose] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [tuesdayclose, setTuesdayClose] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [wednesdayclose, setWednesdayClose] = useState("");
  const [thursday, setThursday] = useState("");
  const [thursdayclose, setThursdayClose] = useState("");
  const [friday, setFriday] = useState("");
  const [fridayclose, setFridayClose] = useState("");
  const [saturday, setSaturday] = useState("");
  const [saturdayclose, setSaturdayClose] = useState("");
  const [sunday, setSunday] = useState("");
  const [sundayclose, setSundayClose] = useState("");

  let [color, setColor] = useState("#DB0000");
  let id = storeid;
  console.log(pickDoc);
  useEffect(() => {
    setLoading(true);
    setStoreDescription(storedescription);
    setStoreTagLine(storetagline);
    setStoreLocation(storelocation);
    setStoreName(storename);
    setStoreProfileImage(storeprofileimage);
    setLoading(false);
  }, [
    storetagline,
    storename,
    storelocation,
    storedescription,
    storeprofileimage,
  ]);

  const uploadDocument = () => {
    setIsLoadingDocument(true);
    if (pickDoc == null) {
      return null;
    } else {
      const imageRef = ref(getStorage(), `documents/${pickDoc.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, pickDoc);

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
          alert("Sorry, upload denied at the moment, Please try again later!");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            Swal.fire({
              icon: "success",
              text: "Successfully uploaded business document",
              title: "Document uploaded to the Cloud",
              timmer: 1500,
              position: "top-right",
            });
            setStoreDocument(downloadURL);
            setIsLoadingDocument(false);
          });
        }
      );
    }
  };

  const uploadFile = () => {
    setIsLoadingImage(true);
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
          alert("Sorry, upload denied at the moment, Please try again later!");
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            Swal.fire({
              icon: "success",
              text: "Successfully uploaded your profile picture",
              title: "Image uploaded to the Cloud",
              timmer: 1500,
              position: "top-right",
            });
            setStoreProfileImage(downloadURL);
            setIsLoadingImage(false);
          });
        }
      );
    }
  };

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    const { amenity } = amenities;

    if (checked) {
      setAmenities({
        amenity: [...amenity, value],
      });
    } else {
      setAmenities({
        amenity: amenity.filter((e) => {
          e !== value;
        }),
      });
    }
    console.log(amenity);
  };

  let mondayRef = useRef();
  let mondaycloseRef = useRef();
  let tuesdayRef = useRef();
  let tuesdaycloseRef = useRef();
  let wednesdayRef = useRef();
  let wednesdaycloseRef = useRef();
  let thursdayRef = useRef();
  let thursdaycloseRef = useRef();
  let fridayRef = useRef();
  let fridaycloseRef = useRef();
  let saturdayRef = useRef();
  let saturdaycloseRef = useRef();
  let sundayRef = useRef();
  let sundaycloseRef = useRef();

  const updateProfile = () => {
    const businesspayload = {
      saturday: saturday + " - " + saturdayclose,
      monday: monday + " - " + mondayclose,
      tuesday: tuesday + " - " + tuesdayclose,
      sunday: sunday + " - " + sundayclose,
      thursday: thursday + " - " + thursdayclose,
      wednesday: wednesday + " - " + wednesdayclose,
      friday: friday + " - " + fridayclose,
    };
    const payload = {
      storeupdatedtagline,
      storeupdateddescription,
      storeupdatedlocation,
      storeupdatedprofileimage,
      storedocument,
      storeamenities: amenities,
      businesshours: businesspayload,
    };

    axios
      .post(`${api}merchant/settings/store/${id}`, payload)
      .then((res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          timmer: "3000",
          text: res.data.msg,
          title: "Updated Succesfully!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "warning",
          tittle: "Oops!",
          text: error.response.data.msg,
        });
      });
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          {" "}
          <div style={StyledObject.storeMenu1}>
            <br />
            <span style={StyledObject.storeMenuContentWrapper}>
              <b>Store Information:</b> <i>(Fill in your store details)</i>
            </span>

            {loading ? (
              <ClipLoader
                color={color}
                loading={loading}
                css={override}
                size={150}
              />
            ) : (
              <>
                <div style={StyledObject.storeMenuContentFields}>
                  <span style={StyledObject.storeMenuFirstField}>
                    Store Name
                  </span>
                  <span style={StyledObject.storeMenuSecondField}>
                    <input
                      style={StyledObject.storeMenuInputField}
                      type="text"
                      name="storeName"
                      value={storename}
                      disabled
                    />
                  </span>
                </div>
                <div style={StyledObject.storeMenuContentFields}>
                  <span style={StyledObject.storeMenuFirstField}>
                    <br />
                    Store Logo
                  </span>
                  <span style={StyledObject.storeMenuSecondField}>
                    <span
                      style={StyledObject.storeMenuChooseFileButton}
                      onClick={() => inputRef.current.click()}
                    >
                      Choose File
                    </span>
                    <br />
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
                      value={storeupdatedprofileimage}
                      name="storeLogo"
                    />
                    <br />
                    <div style={StyledObject.storeMenuLogoPicker}>
                      {isLoadingImage == true ? (
                        <>
                          {" "}
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              backgroundColor: "white",
                              zIndex: "9999",
                            }}
                          >
                            <ClipLoader
                              color={color}
                              loading={isLoadingImage}
                              css={override}
                              size={150}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <span
                            style={{
                              height: "80%",
                              width: "40%",
                              border: "1px dashed #717171",
                              alignSelf: "center",
                              margin: "10px",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {profileImage != "" ? (
                              <img
                                src={profileImage}
                                height={"150px"}
                                width={"150px"}
                                alt="profile picture"
                              />
                            ) : storeupdatedprofileimage != null ? (
                              <img
                                src={storeupdatedprofileimage}
                                height={"150px"}
                                width={"150px"}
                                alt="profile picture"
                              />
                            ) : (
                              <></>
                            )}
                          </span>
                        </>
                      )}
                      <span
                        style={{
                          color: "#717171",
                          fontWeight: "400",
                          padding: "10px",
                        }}
                      >
                        Current Logo
                      </span>
                      <span
                        style={{
                          color: "#FEC72E",
                          fontWeight: "400",
                          padding: "10px",
                        }}
                        onClick={uploadFile}
                      >
                        Upload
                      </span>
                    </div>
                  </span>
                </div>
                <div style={StyledObject.storeMenuContentFields}>
                  <span style={StyledObject.storeMenuFirstField}>
                    Description:
                  </span>
                  <span style={StyledObject.storeMenuSecondField}>
                    <textarea
                      style={StyledObject.storeMenuTextAreaField}
                      type="text"
                      name="storeName"
                      value={storeupdateddescription}
                      onChange={(e) => setStoreDescription(e.target.value)}
                    ></textarea>
                  </span>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <br />
                  <br />
                  <b>Amenities:</b>
                  <br />
                  <div style={{ width: "100%", paddingLeft: "50px" }}>
                    {" "}
                    Ambience:
                  </div>
                  <CheckBox1>
                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Formal"
                        onChange={handleCheck}
                      />{" "}
                      Formal
                    </div>
                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Intimate"
                        onChange={handleCheck}
                      />{" "}
                      Intimate
                    </div>
                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Casual"
                        onChange={handleCheck}
                      />{" "}
                      Casual
                    </div>
                  </CheckBox1>
                  <CheckBox>
                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Accepts credit card"
                        onChange={handleCheck}
                      />{" "}
                      Accepts credit card
                    </div>
                    <div style={{ padding: "10px", textAlign: "left" }}>
                      <input
                        type="checkbox"
                        value="Pool Table"
                        onChange={handleCheck}
                      />{" "}
                      Pool Table
                    </div>

                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Bar"
                        onChange={handleCheck}
                      />{" "}
                      Bar
                    </div>
                    <div style={{ padding: "10px", textAlign: "left" }}>
                      <input
                        type="checkbox"
                        value="Private Dinning"
                        onChange={handleCheck}
                      />{" "}
                      Private Dinning
                    </div>

                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Good for kids"
                        onChange={handleCheck}
                      />{" "}
                      Good for kids
                    </div>
                    <div style={{ padding: "10px", textAlign: "left" }}>
                      <input
                        type="checkbox"
                        value="Rest Room"
                        onChange={handleCheck}
                      />
                      Rest Room
                    </div>

                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Good for group hangouts"
                        onChange={handleCheck}
                      />{" "}
                      Good for group hangouts
                    </div>
                    <div style={{ padding: "10px", textAlign: "left" }}>
                      <input
                        type="checkbox"
                        value="Smoking"
                        onChange={handleCheck}
                      />{" "}
                      Smoking
                    </div>

                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Nose Mask"
                        onChange={handleCheck}
                      />{" "}
                      Nose Mask
                    </div>
                    <div style={{ padding: "10px", textAlign: "left" }}>
                      <input
                        type="checkbox"
                        value="TV"
                        onChange={handleCheck}
                      />{" "}
                      TV
                    </div>

                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Outdoor sitting"
                        onChange={handleCheck}
                      />{" "}
                      Outdoor sitting
                    </div>
                    <div style={{ padding: "10px", textAlign: "left" }}>
                      <input
                        type="checkbox"
                        value="Wifi"
                        onChange={handleCheck}
                      />{" "}
                      Wifi
                    </div>

                    <div style={{ padding: "10px" }}>
                      <input
                        type="checkbox"
                        value="Parking Space"
                        onChange={handleCheck}
                      />{" "}
                      Parking Space
                    </div>
                  </CheckBox>
                </div>
                <div style={{ paddingLeft: "20px" }}>
                  <br />
                  <br />
                  <b>Working Hours:</b>
                  <br />

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Mon:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={mondayRef}
                              style={StyledObject.daysInputField}
                              value={monday}
                              onChange={(e) => {
                                setMonday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={mondaycloseRef}
                              style={StyledObject.daysInputField}
                              value={mondayclose}
                              onChange={(e) => {
                                setMondayClose(e.target.value);
                              }}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={(e) => {
                              mondayRef.current.value = "";
                              setMondayClose("Closed")
                              mondayRef.current.style.display = "none";
                              mondaycloseRef.current.style.display = "none";
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Tues:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={tuesdayRef}
                              style={StyledObject.daysInputField}
                              value={tuesday}
                              onChange={(e) => {
                                setTuesday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={tuesdaycloseRef}
                              style={StyledObject.daysInputField}
                              value={tuesdayclose}
                              onChange={(e) => {
                                setTuesdayClose(e.target.value);
                              }}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={() => {
                              tuesdayRef.current.value = "";
                              tuesdaycloseRef.current.style.display = "none";
                              setTuesdayClose("Closed")
                              tuesdayRef.current.style.display = "none";
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Wed:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={wednesdayRef}
                              style={StyledObject.daysInputField}
                              value={wednesday}
                              onChange={(e) => {
                                setWednesday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={wednesdaycloseRef}
                              style={StyledObject.daysInputField}
                              value={wednesdayclose}
                              onChange={(e) => {
                                setWednesdayClose(e.target.value);
                              }}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={() => {
                              wednesdayRef.current.value = "";
                              wednesdayRef.current.style.display = "none";
                              setWednesdayClose("Closed");
                              wednesdaycloseRef.current.style.display = "none";
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Thur:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={thursdayRef}
                              style={StyledObject.daysInputField}
                              value={thursday}
                              onChange={(e) => {
                                setThursday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={thursdaycloseRef}
                              style={StyledObject.daysInputField}
                              value={thursdayclose}
                              onChange={(e) => {
                                setThursdayClose(e.target.value);
                              }}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={() => {
                              thursdayRef.current.value = "";
                              thursdayRef.current.style.display = "none";
                              setThursdayClose("Closed")
                              thursdaycloseRef.current.style.display = "none";
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Fri:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={fridayRef}
                              style={StyledObject.daysInputField}
                              value={friday}
                              onChange={(e) => {
                                setFriday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={fridaycloseRef}
                              style={StyledObject.daysInputField}
                              value={fridayclose}
                              onChange={(e) => {
                                setFridayClose(e.target.value);
                              }}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={() => {
                              fridayRef.current.value = "";
                              fridaycloseRef.current.style.display = "none";
                              setFridayClose("Closed")
                              fridayRef.current.style.display = "none";
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Sat:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={saturdayRef}
                              style={StyledObject.daysInputField}
                              value={saturday}
                              onChange={(e) => {
                                setSaturday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={saturdaycloseRef}
                              style={StyledObject.daysInputField}
                              value={saturdayclose}
                              onChange={(e) => {
                                setSaturdayClose(e.target.value);
                              }}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={() => {
                              saturdayRef.current.value = "";
                              saturdaycloseRef.current.style.display = "none";
                              saturdayRef.current.style.display = "none";
                              setSaturdayClose("Closed")
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>

                  <WorkHours>
                    <div style={StyledObject.daysWorkHours}>Sun:</div>
                    <div>
                      <span style={StyledObject.daysInputFieldWrapper}>
                        <span>
                          <span>
                            <input
                              ref={sundayRef}
                              style={StyledObject.daysInputField}
                              value={sunday}
                              onChange={(e) => {
                                setSunday(e.target.value);
                              }}
                            />
                          </span>
                          <span>-</span>
                          <span>
                            <input
                              ref={sundaycloseRef}
                              style={StyledObject.daysInputField}
                              value={sundayclose}
                              onChange={(e) => setSundayClose(e.target.value)}
                            />
                          </span>
                          <span
                            style={StyledObject.closedButton}
                            onClick={() => {
                              sundayRef.current.value = "";
                              sundayRef.current.style.display = "none";
                              setSundayClose("Closed")
                              sundaycloseRef.current.style.display = "none";
                            }}
                          >
                            Closed
                          </span>
                        </span>
                      </span>
                      <br />
                    </div>
                  </WorkHours>
                </div>
                <div style={StyledObject.storeMenuContentFields}>
                  <span style={StyledObject.storeMenuFirstField}>
                    Tag Line:
                  </span>
                  <span style={StyledObject.storeMenuSecondField}>
                    <input
                      style={StyledObject.storeMenuInputField}
                      type="text"
                      name="storeTagLine"
                      value={storeupdatedtagline}
                      onChange={(e) => setStoreTagLine(e.target.value)}
                    />
                  </span>
                </div>
                <div style={StyledObject.storeMenuContentFields}>
                  <span style={StyledObject.storeMenuFirstField}>
                    Location:
                  </span>
                  <span style={StyledObject.storeMenuSecondField}>
                    <input
                      style={StyledObject.storeMenuInputField}
                      type="text"
                      name="storeLocation"
                      value={storeupdatedlocation}
                      onChange={(e) => setStoreLocation(e.target.value)}
                    />
                  </span>
                </div>
                <div style={StyledObject.storeMenuSaveSettingsWrapper}>
                  <span
                    style={StyledObject.storeMenuSaveSettingsButton}
                    onClick={(e) => {
                      updateProfile(e);
                    }}
                  >
                    Save Settings
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <div
          style={{
            marinTop: "20px",
            height: "fit-content",
            width: "35%",
            padding: "15px",
          }}
        >
          <input
            ref={uploadDoc}
            style={{ display: "none" }}
            type="file"
            accept="application/pdf"
            id="customeFile"
            onChange={(event) => setPickDoc(event.target.files[0])}
            name="storeDocuments"
          />
          <input
            style={{ display: "none" }}
            type="text"
            id="customeFile"
            value={storedocument}
            name="storeDocument"
          />{" "}
          <RightSide>
            <p>Upload your business registration document</p>
            <SizedBox>
              {isLoadingDocument == true ? (
                <>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      backgroundColor: "white",
                      zIndex: "9999",
                    }}
                  >
                    <ClipLoader
                      color={color}
                      loading={isLoadingDocument}
                      css={override}
                      size={150}
                    />
                  </div>
                </>
              ) : (
                <>
                  <br />
                  <div>
                    {pickDoc != null ? (
                      <>
                        {" "}
                        <object
                          data={URL.createObjectURL(pickDoc)}
                          type="application/pdf"
                          width={"100%"}
                          style={{ margin: "auto" }}
                        ></object>
                        <span
                          style={{
                            color: "#FEB52E",
                            float: "right",
                            padding: " 2px 10px",
                          }}
                          onClick={() => {
                            uploadDocument();
                          }}
                        >
                          Upload
                        </span>
                      </>
                    ) : (
                      <>
                        {" "}
                        <div
                          style={{
                            border: "1px solid #1A1A19",
                            padding: "2px",
                            borderRadius: "3px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            uploadDoc.current.click();
                          }}
                        >
                          Choose File
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </SizedBox>
          </RightSide>
        </div>
      </div>
    </>
  );
};
export default Menu;
