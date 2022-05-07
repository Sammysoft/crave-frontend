import React, { useState, useEffect } from "react";
import pencil from "./svg/pencil.svg";
import trash from "./svg/trash.svg";
import axios from "axios";
import url from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';
let api = url.api;


let Style = {
  trash: {
    padding: "5px",
    margin: "5px",
    color: "#717171",
  },
  pencil: {
    padding: "5px",
    margin: "5px",
    color: "#717171",
  },
};
const Action = ({ storename, mealname, storeid }) => {
  const Navigate = useNavigate();
  const store = storename;
  const meal = mealname;
  const id = storeid;

  const _deleteMeal = (meal, store) => {
    Swal.fire({
      title: "Do you want to delete this Meal from your store?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    })
      .then((result) => {
        if (result.isConfirmed) {
          const payload = {
            storename: store,
            mealname: meal,
          };
          axios.post(`${api}merchant/meal/delete`, payload).then((res) => {
            Swal.fire({
              icon: "success",
              text: res.msg,
              title: "Deleted Meal!",
            });
            window.location.reload(false);
          });
        } else if (result.isDenied) {
          Swal.fire("Aborted!", "", "info");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "warning",
          text: error.response.data.msg,
          title: "Oops!",
        });
      });
  };

  const _updateMeal = (meal, store, id) => {
    Navigate('/lists/addmeal')
  }

  return (
    <>
      <span style={Style.pencil} onClick={()=>{_updateMeal(meal, store, id)}}>
        <img src={pencil} alt="pencil" />
      </span>
      <span
        style={Style.trash}
        onClick={() => {
          _deleteMeal(meal, store);
        }}
      >
        <img src={trash} alt="trash" />
      </span>
    </>
  );
};

export default Action;
