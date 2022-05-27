import Carousel from "react-material-ui-carousel";
import { StyledObject } from "../../Components/StyleObject";
import gallery from "../Dashboard/MenuList/svg/gallery.svg";
import star from "../Dashboard/MenuList/svg/star-fill.svg";
import chatright from "../Dashboard/MenuList/svg/chat-right.svg";
import styled from "styled-components";
import image1 from "../assets/slide1.png";
import image2 from "../assets/slide2.png";
import image3 from "../assets/slide3.png";
import image4 from "../assets/slide4.png";
import image5 from "../assets/slide5.png";
import image6 from "../assets/slide6.png";
import image7 from "../assets/slide7.png";
import image8 from "../assets/slide8.png";
import image9 from "../assets/slide9.png";

export default function RenderStoreFrontCarousel({ storename, storeprofileimage }) {
  var items = [
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image1}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image2}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image3}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image4}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image5}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image6}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image7}`,
    },
    {
      name: storename,
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image8}`,
    },
    {
      name: "ChopHouse",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image9}`,
    },
  ];

  const NameWrapper = styled.p`
    color: white;
    font-weight: 700;
    font-size: 3rem;
  `;
  let Gallery = styled.div`
    color: #db0000;
    background-color: white;
    padding: 10px;
    border-radius: 3px;
    position: absolute;
    top: 25vh;
    right: 5vw;
  `;
  return (
    <>
      <Carousel animation="slide">
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );

  function Item(props) {
    return (
      <div
        className="item"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),url(${props.item.link})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPosition: "center",
          backgroundSize: "1440px 100vh",
          position: "relative",
          height: "100vh",
          width: "100%",
          margin: "0px",
          marginTop: "-10px",
          backgroundColor: "transparent",
        }}
      >
        <Gallery>
          <img src={gallery} alt="gallery" /> Gallery
        </Gallery>
        <div style={StyledObject.carouseltemWrapper}>
          <span style={StyledObject.storeCarouselItem}>
            <img
              src={storeprofileimage}
              style={{ borderRadius: "6px", height: "70px", width: "100px" }}
              alt="storelogo"
            />
            <NameWrapper style={{ fontWeight: "700", fontSize: "" }}>
              {props.item.name}
            </NameWrapper>
          </span>
          <div style={{ position: "absolute", top: "80vh", left: "3vw" }}>
            <img src={star} alt="ratings" height="40px" width="40px" />
            <img src={star} alt="ratings" height="40px" width="40px" />
            <img src={star} alt="ratings" height="40px" width="40px" />
            <img src={star} alt="ratings" height="40px" width="40px" />
            <img src={star} alt="ratings" height="40px" width="40px" />
          </div>
          <div style={{ position: "absolute", top: "90vh", left: "3vw" }}>
            <img src={chatright} alt="chat" />
            <span style={{ color: "white" }}> {"  "} 28 Reviews</span>
          </div>
          <div style={{position: "absolute", top: "95vh", left:"3vw"}}>
            <span style={{ color: "#FEB52E" }}>Open</span>
            {"  "}
            <span style={{ color: "white", fontFamily: "Nunito", fontWeight: "600" }}>9:00AM - 10:00PM</span>
          </div>
        </div>
      </div>
    );
  }
}
