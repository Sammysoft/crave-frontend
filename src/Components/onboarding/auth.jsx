import React, { useState } from "react";
import styled from "styled-components";
import { StyledObject } from "../StyleObject";
import image from "../assets/signup.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import Swal from "sweetalert2";
import url from "../config";

let api = url.api;

const override = css`
  display: block;
  margin: 0 auto;
  //   border-color: red;
`;

let RegisterWrapper = styled.div`
        width: 100%,
height: 70vh,

`;

const TextWrap = styled.div`
  background: linear-gradient(101.63deg, #bd0000 -26.55%, #feb52e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  line-height: 49px;
  width: fit-content;
  margin: 0px 0px 20px 0px;
  font-size: 36px;
`;

const SimpleText = styled.div`
  background: linear-gradient(101.63deg, #bd0000 -26.55%, #feb52e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: 50%;
  padding: 50px 80px;
  width: fit-content;
`;

const SimpleText2 = styled.div`
  color: #bd0000;
  font-family: Nunito;
  width: 90%;
  padding: 50px 80px;
  width: fit-content;
`;
const LoginButton = styled.span`
  padding: 5px;
  margin: 5px;
  border: 1px solid #feb52e;
  border-radius: 5px;
  color: #bd0000;
`;

const SignInWrapper = styled.div`
  width: 65%;
  padding: 0px 5vw;
`;

const Auth = () => {
  const Navigate = useNavigate();
  const [storename, setStorename] = useState("");
  const [password, setPassword] = useState("");
  const [storemail, setStoremail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#DB0000");

  const login = () => {
    setIsLoading(true);
    const payload = {
      storename,
      password,
      storemail,
    };
    axios
      .post(`${api}merchant/auth`, payload)
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        Navigate("/dashboard");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.msg,
        });
        setIsLoading(false);
      });
  };

  return (
    <>
      <RegisterWrapper>
        <img src={image} alt="display-pic" height="100%" width="100%" />
      </RegisterWrapper>
      <div
        style={{
          backgroundColor: "transparent",
          width: "90%",
          margin: "auto",
          height: "auto",
          padding: "100px 10px",
          fontFamily: "Nunito",
        }}
      >
        <TextWrap>Login to your business account</TextWrap>
        <div style={StyledObject.formWrapper}>
          <div
            style={{
              width: "90vw",
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <SimpleText>
              <i>Fill in your business details</i>
            </SimpleText>
            <span
              style={{ width: "47%", display: "flex", alignItems: "center" }}
            >
              <SimpleText2>Are you a new CRAVE member?</SimpleText2>
              <LoginButton>
                <Link
                  style={{
                    textDecoration: "none",
                    textDecorationLine: "none",
                    color: "#BD0000",
                  }}
                  to="/merchant/"
                >
                  Sign up
                </Link>
              </LoginButton>
            </span>
          </div>

          {isLoading ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  position: "relative",
                }}
              >
                <ClipLoader
                  color={color}
                  loading={isLoading}
                  css={override}
                  size={150}
                />
              </div>
            </>
          ) : (
            <>
              <SignInWrapper>
                <div style={StyledObject.storeMenuContentFields}>
                  <span style={StyledObject.storeMenuFirstField}>
                    Store Name
                  </span>
                  <input
                    name="storename"
                    value={storename}
                    onChange={(e) => setStorename(e.target.value)}
                    style={StyledObject.storeMenuInputField}
                  />
                  <br />
                </div>
                <br />
                <div style={StyledObject.inputWrapper}>
                  <span style={StyledObject.storeMenuFirstField}>
                    Email Address:
                  </span>
                  <div style={StyledObject.bottomInputWrapper}>
                    <input
                      type="email"
                      name="careline1"
                      value={storemail}
                      onChange={(e) => setStoremail(e.target.value)}
                      style={StyledObject.storeMenuInputField2}
                    />
                    <div style={StyledObject.bottomInputWrapper}>
                      <span style={StyledObject.inputLabel}>Password:</span>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={StyledObject.storeMenuInputField2}
                      />
                    </div>
                  </div>
                </div>
              </SignInWrapper>
            </>
          )}

          <div style={{ padding: "50px" }}>
            <span
              style={{
                fontSize: "16px",
                color: "#717171",
                fontFamily: "Nunito",
                paddingLeft: "50px",
              }}
            >
              <input type="checkbox" /> I agree, on behalf of my company, to the
              Crave for business terms and conditions, and i agree to Crave’s{" "}
              <span style={StyledObject.decoratedText}>Terms of Use</span> and{" "}
              <span style={StyledObject.decoratedText}>Privacy Policy.</span>
            </span>
          </div>
          <span style={{ padding: "0px 5vw" }}>
            <LoginButton onClick={() => login()} type="submit">
              Login
            </LoginButton>
          </span>
        </div>
      </div>
    </>
  );
};

export default Auth;
