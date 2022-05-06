import React from "react";

const Status = () => {
  let StyleObject = {
    buttonWrapper: {},
    activateWrapper: {
      padding: "10px",
      color: "rgba(254, 199, 46, 1)",
      border: "2px solid rgba(254, 199, 46, 1)",
      borderRadius: "5px",
      fontWeight: "400",
      margin: "5px",
    },
    unavailable: {
      padding: "10px",
      color: "rgba(189, 0, 0, 1)",
      border: "2px solid rgba(189, 0, 0, 1)",
      borderRadius: "5px",
      fontWeight: "400",
      margin: "5px",
    },
  };
  return (
    <>
      <div>
        <span style={StyleObject.activateWrapper}>Activate</span>
        <span style={StyleObject.unavailable}>Unavailable</span>
      </div>
    </>
  );
};

export default Status;
