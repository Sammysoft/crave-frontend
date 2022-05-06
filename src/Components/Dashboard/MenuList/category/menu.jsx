import React, { useEffect, useState } from "react";
import Search from "../search";
import { StyledObject } from "../../../StyleObject";
import axios from "axios";
import url from "../../../config";
let api = url.api;

const Menu = ({ storename }) => {
  const [category, setCategory] = useState([]);
  let store = storename;
  useEffect(() => {
    axios.post(`${api}merchant/menu/category`, { store }).then((res) => {
      console.log(res.data.data);
      setCategory(res.data.data);
    });
  }, [store]);

  return (
    <>
      <Search />

      <div style={StyledObject.mainMenu}>
        <table style={{ width: "100%" }}>
          <thead style={StyledObject.thead}>
            <th style={StyledObject.th}>Category</th>
            <th style={StyledObject.th}>Number of Meals</th>
            <th style={StyledObject.th}>Action</th>
          </thead>
          <tbody>
            {category.length == 0 ? (
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
                      <span>Add New Category To Menu List</span>
                    </div>
                  </td>
                </tr>
              </>
            ) : (
              <>
                {category.map((item, id) => {
                  return (
                    <>
                      <tr style={StyledObject.tr}>
                        <td style={StyledObject.td}>{item.category}</td>
                        <td style={StyledObject.td}>{}</td>
                        <td style={StyledObject.td}>
                          <Action />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;
