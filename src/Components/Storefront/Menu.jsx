import React from "react";
import { StyledObject } from "../StyleObject";
import LeftMenu from "./leftMenu";
import RightMenu from "./rightMenu";

const StorefrontMenu = ({ storeamenities, storebusinesshours, storedescription, storename }) => {
  return (
    <>
      <div style={StyledObject.storefrontMenu}>
        <LeftMenu
          storeamenities={storeamenities}
          storebusinesshours={storebusinesshours}
          storedescription={storedescription}
          storename={storename}
        />
        <RightMenu />
      </div>
    </>
  );
};

export default StorefrontMenu;
