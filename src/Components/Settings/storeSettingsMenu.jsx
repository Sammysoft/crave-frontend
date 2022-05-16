import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyledObject } from "../StyleObject";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
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

const Menu = ({
  storename,
  storetagline,
  storeid,
  storedescription,
  storelocation,
  storeprofileimage,
}) => {
  console.log(storename);
  console.log(storetagline);
  console.log(storeprofileimage);
  const [storeprofile, setStoreName] = useState();
  const [storeupdatedprofileimage, setStoreProfileImage] =
    useState(storeprofileimage);
  const [storeupdatedtagline, setStoreTagLine] = useState(storetagline);
  const [storeupdateddescription, setStoreDescription] =
    useState(storedescription);
  const [storeupdatedlocation, setStoreLocation] = useState(storelocation);
  const [loading, setLoading] = useState(false);
  const [pickFile, setPickFile] = useState(null);
  const [profileImage, setProfileImage] = useState("");
  let [color, setColor] = useState("#DB0000");
  let id = storeid;

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
              title: "Image Uploaded To The Cloud",
              timmer: 1500,
              position: "top-right",
            });
            setStoreProfileImage(downloadURL);
          });
        }
      );
    }
  };

  const updateProfile = () => {
    const payload = {
      storeupdatedtagline,
      storeupdateddescription,
      storeupdatedlocation,
      storeupdatedprofileimage,
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
      <div style={StyledObject.storeMenu}>
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
              <span style={StyledObject.storeMenuFirstField}>Store Name</span>
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
                {/* <span style={StyledObject.storeMenuChooseFileButton}>
                  Choose file
                </span> */}
                <br />
                <input
                  style={StyledObject.storeMenuInputField}
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
                    upload
                  </span>
                </div>
              </span>
            </div>
            <div style={StyledObject.storeMenuContentFields}>
              <span style={StyledObject.storeMenuFirstField}>Description:</span>
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
            <div style={StyledObject.storeMenuContentFields}>
              <span style={StyledObject.storeMenuFirstField}>Tag Line:</span>
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
              <span style={StyledObject.storeMenuFirstField}>Location:</span>
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
    </>
  );
};
export default Menu;
