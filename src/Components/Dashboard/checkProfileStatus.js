import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import url from "../config";
const api = url.api;
export const checkProfileStatus = (  ) => {
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  axios
    .get(`${api}merchant/dashboard`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      let completedProfile = Boolean;
      let _bankStatus = res.data.data.bankdetails.length();
      if (_bankStatus == 0) {
        completedProfile = false;
        Navigate("/settings/bank");
        Swal.fire({
          icon: "info",
          text: "Please Complete Your Bank Settings",
          title: "Add Bank Details",
        });
      }
      if (res.data.data.storetagline === null) {
        completedProfile = false;
        Navigate("/settings/profile");
        Swal.fire({
          icon: "info",
          text: "Help Customers Identify you better",
          title: "Setup Store",
        });
      }
      return null;
    });
};
