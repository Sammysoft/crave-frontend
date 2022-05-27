import React from "react";
import { StyledObject } from "../StyleObject";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div style={StyledObject.navWrapper}>
        <span style={StyledObject.navItem}>
          <img src={"/assets/logo.png"} alt="" />
        </span>
        <span style={StyledObject.navItem}>
          <div style={{ float: "right" }}>
            <Link
              style={{
                textDecoration: "none",
                textDecorationLine: "none",
                color: "#BD0000",
              }}
              to="/dashboard/"
            >
              <button style={StyledObject.button}>
                Go to Dashboard{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </span>
      </div>
    </>
  );
};
export default NavBar;
