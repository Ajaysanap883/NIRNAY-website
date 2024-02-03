import React from "react";

import img1 from "../assests/1.png";
import img2 from "../assests/2.png";
import img3 from "../assests/3.png";
import img4 from "../assests/4.png";
import img5 from "../assests/5.png";
import img6 from "../assests/6.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function slider() {
  const settings = {
    dots: true,
    infinite: true,
    rows: 2,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div class="img-row">
      <h1>Photos</h1>
      <Slider {...settings}>
        <div>
          <img class="imgs" src={img3} alt="" />
        </div>
        <div>
          <img class="imgs" src={img1} alt="" />
        </div>
        <div>
          <img class="imgs" src={img2} alt="" />
        </div>
        <div>
          <img class="imgs" src={img5} alt="" />
        </div>
        <div>
          <img class="imgs" src={img4} alt="" />
        </div>
        <div>
          <img class="imgs" src={img6} alt="" />
        </div>
        <div>
          <img class="imgs" src={img4} alt="" />
        </div>
        <div>
          <img class="imgs" src={img4} alt="" />
        </div>
      </Slider>
    </div>
  );
}
