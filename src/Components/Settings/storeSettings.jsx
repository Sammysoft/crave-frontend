import React, { useEffect, useState } from "react";
import NavBar from "../Dashboard/NavBar/Navbar";
import { StyledObject } from "../StyleObject";
import LeftBar from "../Dashboard/LeftBar";
import Menu from "./storeSettingsMenu";
import axios from "axios";
import url from "../config";
let api = url.api;

const StoreSettings = () => {
  let token = localStorage.getItem("token");
  const [storename, setStoreName] = useState("");
  const [storetagline, setStoreTagLine] = useState("");
  const [storelocation, setStoreLocation] = useState("");
  const [storeid, setStoreId] = useState("");
  const [storedescription, setStoreDescription] = useState("");
  const [storeprofileimage, setStoreProfileImage] = useState("")
  const [storedocument, setStoreDocument] = useState(null)

  useEffect(() => {
    axios
      .get(`${api}merchant/dashboard`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res)
        setStoreTagLine(res.data.data.storetagline);
        setStoreName(res.data.data.storename);
        setStoreId(res.data.data._id);
        setStoreLocation(res.data.data.storelocation);
        setStoreDescription(res.data.data.storedescription);
        setStoreProfileImage(res.data.data.storeprofileimage);
        setStoreDocument(res.data.data.documents)
      });
  }, []);

  return (
    <>
      <div style={StyledObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyledObject.rightbarWrapper}>
          <NavBar page="Store Settings" />
          <Menu
            storename={storename}
            storeid={storeid}
            storelocation={storelocation}
            storedescription={storedescription}
            storetagline={storetagline}
            storeprofileimage = {storeprofileimage}
            document={storedocument}
          />
        </div>
      </div>
    </>
  );
};
export default StoreSettings;
