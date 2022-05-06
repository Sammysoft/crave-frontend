import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import LeftBar from "./LeftBar";
import NavBar from "./NavBar/Navbar";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import url from "../config";
let api = url.api;

let StyleObject = {
  dashboardWrapper: {
    fontFamily: "Nunito",
    color: "#1A1A19",
    display: "flex",
    flexDirection: "row",
    justifyContent: "Space-between",
    alignItems: "flex-start",
    height: "100vh",
    backgroundColor: "#FAFAFB",
  },
  rightbarWrapper: {
    flex: 6,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "20vh",
  },
};

const Dashboard = () => {
  const [storename, setStorename] = useState("");
  const [storelocation, setStorelocation] = useState("");
  const [storedescription, setStoredescription] = useState("");
  const [storelogo, setStorelogo] = useState("");
  const [storetagline, setStoretagline] = useState("");
  const [storeid, setStoreId] = useState("");
  const [orders, setOrders] = useState([]);

  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${api}merchant/dashboard`, {
      headers: {
        Authorization: token,
      },
    })
      .then(async (res) => {
        let response = await res.json();
        setStorename(response.data.storename);
        setStorelocation(response.data.storelocation);
        setStoredescription(response.data.storedescription);
        setStorelogo(response.data.storelogo);
        setStoretagline(response.data.storetagline);
        setStoreId(response.data._id);
        setOrders(response.data.orders);

        if (!response.data) {
          navigate("/merchant/auth");
          Swal.fire({
            icon: "warning",
            title: "Sorry.",
            text: "Please Login",
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Welcome To ${response.data.storename}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        navigate("/merchant/auth");
        Swal.fire({
          title: "Oops!",
          icon: "warning",
          text: "Try Login again",
        });
      });
  }, []);

  return (
    <>
      <div style={StyleObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyleObject.rightbarWrapper}>
          <NavBar page="Dashboard" />
          <Menu
            storename={storename}
            storelocation={storelocation}
            storelogo={storelogo}
            storedescription={storedescription}
            storetagline={storetagline}
            storeid={storeid}
            orders={orders}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
