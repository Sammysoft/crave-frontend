import React, { useEffect, useState } from "react";
import Action from "./action";
import ProductDetails from "./productDetails";
import Search from "./search";
import Status from "./status";
import { StyledObject } from "../../StyleObject";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import url from "../../config";
import axios from "axios";
let api = url.api;

const override = css`
  display: block;
  margin: 0 auto;
  //   border-color: red;
`;

const Menu = ({ storename }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#DB0000");

  useEffect(() => {
    setIsLoading(true);
    let store = storename;
    console.log(store);
    axios.post(`${api}merchant/menu/lists/`, { store }).then((res) => {
      console.log(res);
      console.log(res.data);
      setList(res.data.msg);
    });
    setIsLoading(false);
  }, [storename]);

  const _toNumber = (price) => {
    let number = Number(price).toLocaleString();
    return number;
  };

  return (
    <>
      <Search />
      <div style={StyledObject.mainMenu}>
        <table style={{ width: "100%" }}>
          <thead style={StyledObject.thead}>
            <th style={StyledObject.th}>Product Details</th>
            <th style={StyledObject.th}>Stock</th>
            <th style={StyledObject.th}>Status</th>
            <th style={StyledObject.th}>Action</th>
          </thead>
          {isLoading ? (
            <>
              <tbody>
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
              </tbody>
            </>
          ) : (
            <>
              <tbody>
                {list.length == 0 ? (
                  <>
                    <tr>
                      <td colSpan={4}>
                        <div
                          style={{
                            width: "100%",
                            padding: "10px",
                            height: "50vh",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span>Add New Meal To Menu List</span>
                        </div>
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    {list.map((item, id) => {
                      return (
                        <>
                          <tr style={StyledObject.tr}>
                            <td style={StyledObject.te}>
                              <ProductDetails
                                imgSrc="/assets/img/1.png"
                                firstText={item.mealname}
                                secondText={_toNumber(item.price)}
                                thirdText={item.category}
                              />
                            </td>
                            <td style={StyledObject.td}>{item.stockcount}</td>
                            <td style={StyledObject.td}>
                              <Status />
                            </td>
                            <td style={StyledObject.td}>
                              <Action mealname={ item.mealname } storename = {item.store} mealid={item._id} />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                )}
              </tbody>
            </>
          )}
        </table>
      </div>
    </>
  );
};

export default Menu;
