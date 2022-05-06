import React from "react";
import NavBar from "../NavBar/Navbar";
import LeftBar from "../LeftBar";
import Menu from ".";

const CancelledOrders = () => {
  let StyleObject = {
    dashboardWrapper: {
      fontFamily: "Nunito",
      color: "#1A1A19",
      display: "flex",
      flexDirection: "row",
      justifyContent: "Space-between",
      alignItems: "flex-start",
      height: "100vh",
    },
    rightbarWrapper: {
      flex: 6,
      // display: 'flex',
      // flexDirection: 'column',
      justifyContent: "space-between",
      alignItems: "flex-start",
      height: "20vh",
    },
    datePicker: {
      height: "10vh",
      width: "100%",
      padding: "40px ",
      fontFamily: "Nunito",
      textAlign: "end",
    },
    element: {
      padding: "10px",
      color: "rgba(189, 0, 0, 1)",
      border: "2px solid rgba(189, 0, 0, 1)",
      borderRadius: "5px",
    },
  };

  return (
    <>
      <div style={StyleObject.dashboardWrapper}>
        <LeftBar />
        <div style={StyleObject.rightbarWrapper}>
          <NavBar page="Cancelled Orders" />

          <div style={StyleObject.datePicker}>
            <span style={StyleObject.element}>
              Weekly{" "}
              <svg
                style={{ color: "#BD0000" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <span>
              <svg
                style={{ color: "rgba(189, 0, 0, 1)", margin: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </span>
            <span style={StyleObject.element}>
              21-02-2022{" "}
              <svg
                style={{ color: "#BD0000" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <svg
              style={{ color: "rgba(189, 0, 0, 1", margin: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dash"
              viewBox="0 0 16 16"
            >
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
            <span style={StyleObject.element}>
              28-02-2022{" "}
              <svg
                style={{ color: "#BD0000" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default CancelledOrders;
