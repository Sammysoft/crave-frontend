import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { StyledObject } from "../../StyleObject";
import Swal from "sweetalert2";
import url from "../../config";
let api = url.api;

const LeftBar = () => {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const [storename, setStorename] = useState("");
  const [storelocation, setStorelocation] = useState("");
  const [storedescription, setStoredescription] = useState("");
  const [storelogo, setStorelogo] = useState("");
  const [storetagline, setStoretagline] = useState("");
  const [storeid, setStoreId] = useState("");
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    fetch(`${api}merchant/dashboard`, {
      headers: {
        Authorization: token,
      },
    })
      .then(async (res) => {
        let response = await res.json();
        console.log(res);
        setStorename(response.data.storename);
        setStorelocation(response.data.storelocation);
        setStoredescription(response.data.storedescription);
        setStorelogo(response.data.storeprofileimage);
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
        } else if (response.data.bankdetails.length == 0) {
          navigate("/settings/bank");
          Swal.fire({
            icon: "info",
            text: "Please Complete Your Bank Settings",
            title: "Add Bank Details",
          });
        } else if (
          !response.data.storetagline ||
          !response.data.storeprofileimage
        ) {
          navigate("/settings/");
          Swal.fire({
            icon: "info",
            text: "Help Customers Identify you better and upload all relevant documents",
            title: "Setup Your Store Completely",
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

  const thisRoute = useLocation().pathname;

  const Navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");

    Navigate("/merchant/auth");

    Swal.fire({
      icon: "success",
      text: "Logged Out Succesfully",
      title: "Good Bye",
    });
  };

  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    if (
      thisRoute === "/settings/" ||
      thisRoute === "/settings/profile" ||
      thisRoute === "/settings/bank"
    ) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  }, []);

  return (
    <>
      <div style={StyledObject.dashboardLeftBar}>
        <div style={StyledObject.image}>
          <img src="/assets/logo.png" style={{ paddingLeft: "15%" }} />
        </div>
        <div style={StyledObject.listWrapper}>
          <ul style={StyledObject.unorderedList}>
            <span style={{ width: "100%", backgroundColor: "red" }}>
              <span
                style={
                  thisRoute === "/dashboard"
                    ? {
                        background:
                          "linear-gradient(64.02deg, #FFEED1 22.87%, rgba(255, 251, 244, 0.05) 90.1%)",
                      }
                    : { background: "transparent" }
                }
              >
                <li style={StyledObject.list}>
                  <Link
                    to="/dashboard"
                    activeClass="active"
                    style={
                      thisRoute === "/dashboard"
                        ? {
                            color: "#DB0000",
                            textDecorationLine: "none",
                            textDecoration: "none",
                          }
                        : {
                            textDecorationLine: "none",
                            textDecoration: "none",
                            color: "rgba(26, 26, 25, 1)",
                          }
                    }
                    exact={true}
                  >
                    <svg
                      style={
                        thisRoute === "/dashboard"
                          ? { color: "#DB0000" }
                          : { color: "rgba(26, 26, 25, 1)" }
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-ui-checks-grid"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z" />
                    </svg>
                    <span
                      style={
                        thisRoute === "/dashboard"
                          ? {
                              color: "#DB0000",
                              textDecorationLine: "none",
                              textDecoration: "none",
                              paddingLeft: "5px",
                            }
                          : {
                              color: "rgba(26, 26, 25, 1)",
                              textDecorationLine: "none",
                              textDecoration: "none",
                              paddingLeft: "5px",
                            }
                      }
                    >
                      {" "}
                      Dashboard
                    </span>
                  </Link>
                </li>
              </span>
            </span>

            <span style={{ display: "flex", flexDirection: "row" }}>
              <li style={StyledObject.list}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-minecart"
                  viewBox="0 0 16 16"
                  style={
                    thisRoute === "/orders/cancelled" ||
                    thisRoute === "/orders/missed" ||
                    thisRoute === "/orders/inaccurate"
                      ? { color: "#DB0000" }
                      : { color: "rgba(26, 26, 25, 1)" }
                  }
                >
                  <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                </svg>
                <Link
                  to="/orders/missed"
                  activeClass="active"
                  style={{
                    textDecoration: "none",
                    textDecoarationLine: "none",
                  }}
                >
                  <span
                    style={
                      thisRoute === "/orders/cancelled" ||
                      thisRoute === "/orders/missed" ||
                      thisRoute === "/orders/inaccurate"
                        ? {
                            color: "#DB0000",
                            textDecorationLine: "none",
                            textDecoration: "none",
                            paddingLeft: "5px",
                          }
                        : {
                            color: "rgba(26, 26, 25, 1)",
                            textDecorationLine: "none",
                            textDecoration: "none",
                            paddingLeft: "5px",
                          }
                    }
                  >
                    Orders
                  </span>
                </Link>
              </li>
            </span>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <li style={StyledObject.list}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clipboard-data"
                  viewBox="0 0 16 16"
                  style={
                    thisRoute === "/lists/" ||
                    thisRoute === "/lists/updatemeal/*"
                      ? { color: "#DB0000" }
                      : { color: "rgba(26, 26, 25, 1)" }
                  }
                >
                  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
                <Link
                  style={
                    thisRoute === "/lists/"
                      ? {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "#DB0000",
                          paddingLeft: "5px",
                        }
                      : {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "rgba(26, 26, 25, 1)",
                          paddingLeft: "5px",
                        }
                  }
                  to="/lists/"
                >
                  {" "}
                  Menu List
                </Link>
              </li>
            </span>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <li style={StyledObject.list}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                  style={
                    thisRoute === "/settings/" ||
                    thisRoute === "/settings/profile" ||
                    thisRoute === "/settings/bank"
                      ? { color: "#DB0000" }
                      : { color: "rgba(26, 26, 25, 1)" }
                  }
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
                <span
                  onClick={(e) => {
                    setToggleMenu(!toggleMenu);
                  }}
                  style={
                    thisRoute === "/settings/" ||
                    thisRoute === "/settings/profile" ||
                    thisRoute === "/settings/bank"
                      ? {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "#DB0000",
                          paddingLeft: "5px",
                        }
                      : {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "rgba(26, 26, 25, 1)",
                          paddingLeft: "5px",
                        }
                  }
                >
                  Settings
                </span>

                {toggleMenu === true ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-up"
                      viewBox="0 0 16 16"
                      style={
                        thisRoute === "/settings/" ||
                        thisRoute === "/settings/profile" ||
                        thisRoute === "/settings/bank"
                          ? { color: "#DB0000", marginLeft: "10px" }
                          : { color: "rgba(26, 26, 25, 1)", marginLeft: "10px" }
                      }
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                      style={
                        thisRoute === "/settings/" ||
                        thisRoute === "/settings/profile" ||
                        thisRoute === "/settings/bank"
                          ? { color: "#DB0000", marginLeft: "10px" }
                          : { color: "rgba(26, 26, 25, 1)", marginLeft: "10px" }
                      }
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </>
                )}
                {toggleMenu === true ? (
                  <>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "right",
                        flexDirection: "column",
                      }}
                    >
                      <span
                        style={{
                          marginLeft: "20px",
                          padding: "5px",
                          fontSize: "16px",
                        }}
                        onClick={() => {
                          setToggleMenu(true);
                        }}
                      >
                        <Link
                          style={
                            thisRoute === "/settings/profile"
                              ? {
                                  textDecorationLine: "none",
                                  textDecoration: "none",
                                  color: "#DB0000",
                                }
                              : {
                                  textDecorationLine: "none",
                                  textDecoration: "none",
                                  color: "rgba(26, 26, 25, 1)",
                                }
                          }
                          to="/settings/profile"
                        >
                          User Profile
                        </Link>
                      </span>
                      <span
                        style={{
                          marginLeft: "20px",
                          padding: "5px",
                          fontSize: "16px",
                        }}
                        onClick={() => {
                          setToggleMenu(true);
                        }}
                      >
                        <Link
                          style={
                            thisRoute === "/settings/"
                              ? {
                                  textDecorationLine: "none",
                                  textDecoration: "none",
                                  color: "#DB0000",
                                }
                              : {
                                  textDecorationLine: "none",
                                  textDecoration: "none",
                                  color: "rgba(26, 26, 25, 1)",
                                }
                          }
                          to="/settings/"
                        >
                          {" "}
                          Store Settings
                        </Link>
                      </span>
                      <span
                        style={{
                          marginLeft: "20px",
                          padding: "5px",
                          fontSize: "16px",
                        }}
                        onClick={() => {
                          setToggleMenu(true);
                        }}
                      >
                        <Link
                          style={
                            thisRoute === "/settings/bank"
                              ? {
                                  textDecorationLine: "none",
                                  textDecoration: "none",
                                  color: "#DB0000",
                                }
                              : {
                                  textDecorationLine: "none",
                                  textDecoration: "none",
                                  color: "rgba(26, 26, 25, 1)",
                                }
                          }
                          to="/settings/bank"
                        >
                          {" "}
                          Bank Details
                        </Link>
                      </span>
                      <span
                        style={{
                          marginLeft: "20px",
                          padding: "5px",
                          fontSize: "16px",
                        }}
                        onClick={() => {
                          setToggleMenu(true);
                        }}
                      >
                        Subscription
                      </span>
                    </div>
                  </>
                ) : (
                  <>{""}</>
                )}
              </li>
            </span>

            <span style={{ display: "flex", flexDirection: "row" }}>
              <li style={StyledObject.list}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-credit-card"
                  viewBox="0 0 16 16"
                  style={
                    thisRoute === "/history"
                      ? { color: "#DB0000" }
                      : { color: "rgba(26, 26, 25, 1)" }
                  }
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                  <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                </svg>
                <Link
                  style={
                    thisRoute === "/history"
                      ? {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "#DB0000",
                          paddingLeft: "5px",
                        }
                      : {
                          color: "rgba(26, 26, 25, 1)",
                          textDecorationLine: "none",
                          textDecoration: "none",
                          paddingLeft: "5px",
                        }
                  }
                  to="/history"
                >
                  History
                </Link>
              </li>
            </span>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <li style={StyledObject.list}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-badge-ad"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                </svg>
                <Link
                  style={
                    thisRoute === "/adverts"
                      ? {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "#DB0000",
                          paddingLeft: "5px",
                        }
                      : {
                          color: "rgba(26, 26, 25, 1)",
                          paddingLeft: "5px",
                          textDecorationLine: "none",
                          textDecoration: "none",
                        }
                  }
                  to="/adverts"
                >
                  Ads
                </Link>
              </li>
            </span>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <li style={StyledObject.list}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-question-circle"
                  viewBox="0 0 16 16"
                  style={
                    thisRoute === "/faq"
                      ? { color: "#DB0000" }
                      : { color: "rgba(26, 26, 25, 1)" }
                  }
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                </svg>
                <Link
                  style={
                    thisRoute === "/faq"
                      ? {
                          textDecorationLine: "none",
                          textDecoration: "none",
                          color: "rgba(26, 26, 25, 1)",
                          paddingLeft: "5px",
                        }
                      : {
                          color: "rgba(26, 26, 25, 1)",
                          paddingLeft: "5px",
                          textDecorationLine: "none",
                          textDecoration: "none",
                        }
                  }
                  to="/faq"
                >
                  FAQ
                </Link>
              </li>
            </span>

            <span style={{ display: "flex", flexDirection: "row", marginTop: "4vh"  }}>
              <li
                style={StyledObject.list}
                onClick={() => {
                  logout();
                }}
              >
                <span style={{ padding: "5px"}}> Logout</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
