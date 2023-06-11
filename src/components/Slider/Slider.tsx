import React from "react";
import "../Slider/Slider.css";
import img1 from "../../assets/imageSlide/img1.webp";
import img2 from "../../assets/imageSlide/img2.webp";
import img3 from "../../assets/imageSlide/Croods - Keeping in Touch.png";
import img4 from "../../assets/imageSlide/Hands - Cash.png";
import img5 from "../../assets/imageSlide/Hands - Phone.png";
import img6 from "../../assets/imageSlide/Happy Bunch - Astronaut.png";
import img7 from "../../assets/imageSlide/Happy Bunch - Desk.png";
import img8 from "../../assets/imageSlide/Open Doodles - Coffee.png";
import img9 from "../../assets/imageSlide/Open Doodles - Doggie.png";
import img10 from "../../assets/imageSlide/undraw_to_the_moon_re_q21i.svg";
import img11 from "../../assets/imageSlide/undraw_traveling_yhxq.svg";
import video from "../../assets/imageSlide/vide01.mp4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slide = () => {
  const settings = {
    infinite: true,
    speed: 3500,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: false,
  };
  const settings2 = {
    infinite: true,
    speed: 3500,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: false,
  };
  return (
    <section className="slider__container">
      <Slider {...settings}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <video src={video}></video>
      </Slider>

      <Slider {...settings2}>
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <video src={video}></video>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </Slider>
    </section>
  );
};

export default Slide;
