import React from "react";
import screen5 from "../assests/5-screen.png";
import screen4 from "../assests/4-screen.png";
import screen3 from "../assests/3-screen.png";
import screen2 from "../assests/2-screen.png";
import screen1 from "../assests/1-screen.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1.5,

    dotsClass: "slick-dots custom-dots",

    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1254,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div class="phone-slide">
      <div class="img-row">
        <Slider {...settings}>
          <div>
            <img class="imgs" src={screen5} alt="" />
          </div>
          <div>
            <img class="imgs" src={screen1} alt="" />
          </div>
          <div>
            <img class="imgs" src={screen2} alt="" />
          </div>
          <div>
            <img class="imgs" src={screen3} alt="" />
          </div>
          <div>
            <img class="imgs" src={screen4} alt="" />
          </div>
        </Slider>
      </div>

      {/* <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" /> */}
    </div>
  );
}
