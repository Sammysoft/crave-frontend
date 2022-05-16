import Carousel from "react-material-ui-carousel";
import { StyledObject } from "../../Components/StyleObject";
import styled from "styled-components";
import image1 from "../assets/slide1.png";
import image2 from "../assets/slide2.png";
import image3 from "../assets/slide3.png";
import image4 from '../assets/slide4.png';
import image5 from '../assets/slide5.png';
import image6 from '../assets/slide6.png';
import image7 from '../assets/slide7.png';
import image8 from '../assets/slide8.png';
import image9 from '../assets/slide9.png'
export default function RenderCarousel() {
  var items = [
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image1}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image2}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image3}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image4}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image5}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image6}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image7}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image8}`,
    },
    {
      name: "So many choices for you",
      name2:
        "Choose from over 30 local and national favourites across the country. from your neighbourhood Abuja joint to the best sharwama spot",
      link: `${image9}`,
    },
  ];

  const NameWrapper = styled.p`
    background-image: linear-gradient(101.63deg, #bd0000 -26.55%, #feb52e 100%);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 3rem;
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
          height: "100vh",
          width: "100%",
          margin: "0px",
          marginTop: "-10px",
          backgroundColor: "transparent",
        }}
      >
        <div style={StyledObject.carouseltemWrapper}>
          <span style={StyledObject.carouselItem}>
            <NameWrapper style={{ fontWeight: "700", fontSize: "" }}>
              {props.item.name}
            </NameWrapper>
            <h6>{props.item.name2}</h6>
          </span>
        </div>
      </div>
    );
  }
}
