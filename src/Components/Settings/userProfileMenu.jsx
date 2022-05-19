import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyledObject } from "../StyleObject";
import Swal from "sweetalert2";
import styled from "styled-components";
import url from "../config";
let api = url.api;




const UserProfileMenu = ({ fullname, password, email, phonenumber, id }) => {
  const [updatedfullname, setFullName] = useState(fullname);
  const [updatedphonenumber, setPhoneNumber] = useState(phonenumber);
  const [updatedemail, setEmail] = useState(email);
  const [oldpassword, setOldPassword] = useState(null);
  const [firstpassword, setFirstPassword] = useState(null);
  const [secondpassword, setSecondPassword] = useState(null);
  const merchantId = id;

  useEffect(() => {
    setFullName(fullname);
    setPhoneNumber(phonenumber);
    setEmail(email);
  }, [fullname, password, email, phonenumber]);

  const uploadDetails = () => {
    if (firstpassword != null && firstpassword == secondpassword) {
      const payload = {
        email: updatedemail,
        password: firstpassword,
        fullname: updatedfullname,
        phonenumber: updatedphonenumber,
        oldpassword,
      };
      axios
        .post(`${api}merchant/settings/profile/${merchantId}`, payload)
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            text: res.data.msg,
            title: "Congratulations!",
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "warning",
            text: error.response.data.msg,
            title: "Oops!",
          });
        });
    } else if (
      oldpassword == null &&
      firstpassword == null &&
      secondpassword == null
    ) {
      const payload = {
        email: updatedemail,
        password: firstpassword,
        fullname: updatedfullname,
        phonenumber: updatedphonenumber,
        oldpassword,
      };
      axios
        .post(`${api}merchant/settings/profile/${merchantId}`, payload)
        .then((res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            text: res.data.msg,
            title: "Congratulations!",
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "warning",
            text: error.response.data.msg,
            title: "Oops!",
          });
        });
    } else {
      Swal.fire({
        icon: "warning",
        text: "Please, ensure the new passwords match!",
        title: "Password Mismatch",
      });
    }
  };

  return (
    <>
      <div style={StyledObject.storeMenu}>
        <br />
        <span style={StyledObject.storeMenuContentWrapper}>
          <b>General:</b> <i>(Set up your general profile details)</i>
        </span>
        <br />
        <br />

        <div style={StyledObject.storeMenuContentFields}>
          <span style={StyledObject.storeMenuFirstField}>Full Name</span>
          <span style={StyledObject.storeMenuSecondField}>
            <input
              style={StyledObject.storeMenuInputField}
              type="text"
              name="storeName"
              value={updatedfullname}
              onChange={(e) => setFullName(e.target.value)}
            />
          </span>
        </div>

        <div style={StyledObject.storeMenuContentFields}>
          <span style={StyledObject.storeMenuFirstField}>Email</span>
          <span style={StyledObject.storeMenuSecondField}>
            <input
              style={StyledObject.storeMenuInputField}
              type="email"
              name="Email"
              value={updatedemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
          <div style={StyledObject.storeMenuContentFields}>
            <span style={StyledObject.storeMenuFirstField2}>Phone Number</span>
            <span style={StyledObject.storeMenuSecondField2}>
              <input
                style={StyledObject.storeMenuInputField}
                type="text"
                name="PhoneNumber"
                value={updatedphonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </span>
          </div>
        </div>

        <span style={StyledObject.storeMenuContentWrapper}>
          <b>Change Password:</b> <i>(Change your current password)</i>
        </span>
        <br />
        <br />

        <div style={StyledObject.storeMenuContentFields}>
          <span style={StyledObject.storeMenuFirstField}>Old Password</span>
          <span style={StyledObject.storeMenuSecondField}>
            <input
              style={StyledObject.storeMenuInputField}
              type="password"
              name="storeName"
              value={oldpassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
          </span>
        </div>

        <div style={StyledObject.storeMenuContentFields}>
          <span style={StyledObject.storeMenuFirstField}>New Password</span>
          <span style={StyledObject.storeMenuSecondField}>
            <input
              style={StyledObject.storeMenuInputField}
              type="password"
              name="storeName"
              value={firstpassword}
              onChange={(e) => setFirstPassword(e.target.value)}
            />
          </span>
        </div>

        <div style={StyledObject.storeMenuContentFields}>
          <span style={StyledObject.storeMenuFirstField}>
            Repeat New Password
          </span>
          <span style={StyledObject.storeMenuSecondField}>
            <input
              style={StyledObject.storeMenuInputField}
              type="password"
              name="storeName"
              value={secondpassword}
              onChange={(e) => setSecondPassword(e.target.value)}
            />
          </span>
        </div>

        <div style={StyledObject.storeMenuSaveSettingsWrapper}>
          <span
            style={StyledObject.storeMenuSaveSettingsButton}
            onClick={(e) => {
              uploadDetails();
            }}
          >
            Save Settings
          </span>
        </div>
      </div>
    </>
  );
};
export default UserProfileMenu;
