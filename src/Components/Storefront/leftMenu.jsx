import React, { useRef, useState, useEffect } from "react";
import { StyledObject } from "../StyleObject";
import styled from "styled-components";
import heart from "../Dashboard/MenuList/svg/heart.svg";
import share from "../Dashboard/MenuList/svg/share.svg";
import chat from "../Dashboard/MenuList/svg/chat.svg";
import chevronright from "../Dashboard/MenuList/svg/chevron-right.svg";
import checkmark from "../Dashboard/MenuList/svg/checkmark.svg";
import cancelmark from "../Dashboard/MenuList/svg/cancelmark.svg";
import axios from "axios";
import url from "../config";
let api = url.api;

let SeeMore = styled.span`
  background-image: linear-gradient(
    50deg,
    rgba(189, 0, 0, 1),
    rgba(254, 181, 46, 1)
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  right: 10px;
  position: absolute;
`;
const LeftMenu = ({ storedescription, storebusinesshours, storename }) => {
  const Main = useRef();
  const Breakfast = useRef();
  const Salad = useRef();
  const Pastries = useRef();
  const Platter = useRef();
  const Sweet = useRef();
  const Intercontinental = useRef();
  const Natives = useRef();
  const Refresh = useRef();
  const Meat = useRef();
  const Grill = useRef();

  const categorizedMeal = (val) => {
    setCategorized(
      meals.filter((el) => {
        console.log(val);
        return el.category === val;
      })
    );
    console.log(categorized);
  };

  const [clickedEvent, setClickedEvent] = useState(Main);
  const [meals, setMeals] = useState([]);
  const [categorized, setCategorized] = useState([]);

  useEffect(() => {
    axios
      .post(`${api}merchant/menu/lists`, { store: storename })
      .then((res) => {
        console.log(res.data.msg);
        setMeals(res.data.msg);
      });
  }, [storename]);

  return (
    <>
      <div style={StyledObject.storeLeftMenuAboutWrapper}>
        <div style={StyledObject.aboutSectionHeader}>
          <p
            style={{ fontFamily: "Nunito", color: "black", fontWeight: "600" }}
          >
            About
          </p>
          <div style={StyledObject.aboutSectionText}>{storedescription}</div>
          <div style={StyledObject.aboutSectionButtons}>
            <span
              style={{
                color: "#DB0000",
                backgroundColor: "#FEB52E",
                padding: "5px",
                borderRadius: "3px",
              }}
            >
              <img src={chat} alt="chat" />
              {"  "}
              Write a Review
            </span>
            <span
              style={{
                color: "#DB0000",
                backgroundColor: "white",
                border: "2px solid #DB0000",
                borderRadius: "3px",
                padding: "5px",
              }}
            >
              <img src={heart} alt="" /> Add to Favourite
            </span>
            <span
              style={{
                color: "#DB0000",
                backgroundColor: "white",
                border: "2px solid #DB0000",
                borderRadius: "3px",
                padding: "5px",
              }}
            >
              <img src={share} alt="share" /> Share
            </span>
          </div>
        </div>
        <hr />
        <div style={StyledObject.storeleftMenuList}>
          <p
            style={{
              fontFamily: "Nunito",
              color: "black",
              fontWeight: "600",
              width: "100%",
              position: "relative",
            }}
          >
            Menu{" "}
            <SeeMore>
              See all <img src={chevronright} alt="chevron" />
            </SeeMore>
          </p>
          <hr />
          <div
            style={{
              display: "grid",
              fontWeight: "700",
              gridTemplateColumns:
                "auto auto auto auto auto auto auto auto auto auto auto",
            }}
          >
            <span
              ref={Main}
              onClick={() => {
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                Main.current.style.borderBottom = "7px solid #DB0000";
                setClickedEvent(Main);
                categorizedMeal("Main");
              }}
              style={{
                borderBottom: "7px solid #E5E5E5",
                borderBottomLeftRadius: "4px",
                borderTopLeftRadius: "4px",
                cursor: "pointer",
              }}
            >
              Main
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Breakfast}
              onClick={() => {
                Breakfast.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Breakfast);
                categorizedMeal("Breakfast");
              }}
            >
              Breakfast
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Grill}
              onClick={() => {
                Grill.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Grill);
                categorizedMeal("Grill");
              }}
            >
              Grill
            </span>
            <span
              style={{
                borderBottom: "7px solid #E5E5E5",
              }}
              ref={Pastries}
              onClick={() => {
                Pastries.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Pastries);
                categorizedMeal("Pastries");
              }}
            >
              Pastries
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Salad}
              onClick={() => {
                Salad.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Salad);
                categorizedMeal("Salad");
              }}
            >
              Salad
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Intercontinental}
              onClick={() => {
                Intercontinental.current.style.borderBottom =
                  "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Intercontinental);
                categorizedMeal("Intercontinental");
              }}
            >
              Intercontinental
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Natives}
              onClick={() => {
                Natives.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Natives);
                categorizedMeal("Natives");
              }}
            >
              Natives
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Refresh}
              onClick={() => {
                Refresh.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Refresh);
                categorizedMeal("Refresh");
              }}
            >
              Refresh
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Meat}
              onClick={() => {
                Meat.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Meat);
                categorizedMeal("Meat");
              }}
            >
              Meat lovers
            </span>
            <span
              style={{ borderBottom: "7px solid #E5E5E5" }}
              ref={Platter}
              onClick={() => {
                Platter.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Platter);
                categorizedMeal("Platter");
              }}
            >
              Platter
            </span>
            <span
              style={{
                borderBottom: "7px solid #E5E5E5",
                borderBottomRightRadius: "4px",
              }}
              ref={Sweet}
              onClick={() => {
                Sweet.current.style.borderBottom = "7px solid #DB0000";
                clickedEvent.current.style.borderBottom = "7px solid #E5E5E5";
                setClickedEvent(Sweet);
                categorizedMeal("Sweet");
              }}
            >
              Sweet Tooth
            </span>
          </div>
          <div style={{ minHeight: "50vh", width: "100%" }}>
            {categorized.length === 0 ? (
              <>
                <div
                  style={{
                    width: "50%",
                    height: "40vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ textAlign: "center" }}>
                    No Meal In This Category
                  </span>
                </div>
              </>
            ) : (
              <>
                {" "}
                {categorized.map((meal) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "15% auto",
                          columnGap: "2vw",
                          margin: "4vh 0px",
                        }}
                      >
                        <span>
                          <img
                            src={meal.mealimage}
                            alt="meal photo"
                            width="100px"
                            height="100px"
                            style={{borderRadius:"5px"}}
                          />
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "left",
                          }}
                        >
                          <span>{meal.mealname}</span>
                          <span>N{meal.price}</span>
                          <span>Ratings</span>
                        </span>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <hr />
        <div>
          <p
            style={{
              fontFamily: "Nunito",
              color: "black",
              fontWeight: "600",
              width: "100%",
              position: "relative",
            }}
          >
            Working hours
          </p>
          <hr />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gap: "10px",
              width: "40%",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            <span>Mon</span>
            <span>{storebusinesshours.Monday}</span>
            <span>Tue</span>
            <span>{storebusinesshours.Tuesday}</span>
            <span>Wed</span>
            <span>{storebusinesshours.Wednesday}</span>
            <span>Thur</span>
            <span>{storebusinesshours.Thursday}</span>
            <span>Fri</span>
            <span>{storebusinesshours.Friday}</span>
            <span>Sat</span>
            <span>{storebusinesshours.Saturday}</span>
            <span>Sun</span>
            <span>{storebusinesshours.Sunday}</span>
          </div>
          <hr />
        </div>
        <div>
          <p
            style={{
              fontFamily: "Nunito",
              color: "black",
              fontWeight: "600",
              width: "100%",
              position: "relative",
            }}
          >
            Amenities and more{" "}
            <SeeMore>
              See all <img src={chevronright} alt="chevron" />
            </SeeMore>
          </p>
          <hr />
          <div
            style={{
              width: "25%",
              display: "grid",
              gridTemplateColumns: "auto auto",
              columnGap: "10px",
            }}
          >
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Casual</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Group Hangout</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Outdoor sitting</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Parking space</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Reservation</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Delivery</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Takeout</span>
            <span>
              <img src={checkmark} alt="checkmark" />
            </span>
            <span>Accepts credit cards</span>
          </div>
        </div>
        <hr />
        <div>
          <p
            style={{
              fontFamily: "Nunito",
              color: "black",
              fontWeight: "600",
              width: "100%",
              position: "relative",
            }}
          >
            Reviews{" "}
            <SeeMore>
              See all <img src={chevronright} alt="chevron" />
            </SeeMore>
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
