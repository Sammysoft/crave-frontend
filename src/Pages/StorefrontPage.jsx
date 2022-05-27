import React, { useState, useEffect } from "react";
import NavBar from "../Components/Home/navbar-storefront";
import RenderStoreFrontCarousel from "../Components/Home/storefront-carousel";
import StorefrontMenu from "../Components/Storefront/Menu";
import url from "../Components/config";
import axios from "axios";
let api = url.api;

const Storefront = () => {
  const [storename, setStoreName] = useState("");
  const [storeprofileimage, setStoreProfileImage] = useState("");
  const [storetagline, setStoreTagline] = useState("");
  const [storedescription, setStoreDescription] = useState("");
  const [storebusinesshours, setStoreBusinessHours] = useState({});
  const [storeamenities, setStoreAmenities] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`${api}merchant/dashboard`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data)
        setStoreName(res.data.data.storename);
        setStoreAmenities(res.data.data.storeamenities);
        setStoreProfileImage(res.data.data.storeprofileimage);
        setStoreBusinessHours({
          Monday: res.data.data.monday,
          Tuesday: res.data.data.tuesday,
          Wednesday: res.data.data.wednesday,
          Thursday: res.data.data.thursday,
          Friday: res.data.data.friday,
          Saturday: res.data.data.saturday,
          Sunday: res.data.data.sunday,
        });
        setStoreDescription(res.data.data.storedescription)
        setStoreTagline(res.data.data.storetagline)
      });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
        <RenderStoreFrontCarousel
          storename={storename}
          storeprofileimage={storeprofileimage}
          storedescription={storedescription}
        />
        <StorefrontMenu
          storeamenities={storeamenities}
          storename={storename}
          storebusinesshours={storebusinesshours}
          storetagline={storetagline}
          storedescription={storedescription}
        />
      </div>
    </>
  );
};

export default Storefront;
