import React from "react";
import Slider from "react-slick";
import firstimage from "../assests/firstimage.png";
import pink from "../assests/pinkcircle.png";
import hole from "../assests/holecircle.png";
import contain from "../assests/containcicle.png";
import light from "../assests/lightcircle.png";

import img1 from "../assests/cupimg.jpg";
import img2 from "../assests/sceneimg.jpg";
import img3 from "../assests/meetingimg.jpg";
import img4 from "../assests/manimg.jpg";
import img5 from "../assests/camimg.jpg";
import img6 from "../assests/compimg.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Content3 from "./content3";

const main = () => {
  var settings = {
    rows: 2,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1738,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div class="main">
      <div id="about" className="content">
        <span class="pink">
          <img src={pink} alt="" />
        </span>
        <div class="description">
          <h2>About NIRNAY</h2>
          <p>
            NIRNAY portal is an integrated real time online monitoring system,
            where all the major performance parameters pf the key focus ares at
            the GP/Villages levels are tracked and displayed in the public
            domain. it facilitates a completely automated online workflow
            configurable Gram Sabha management system ,substituting paper-based
            manual process. The primary objective of "NIRNAY" portal is to make
            the Graam Sabha meetings more participatory, transparent and
            vibrant.{" "}
          </p>
        </div>
        <div class="card">
          <img class="light" src={light} alt="" />
          <img class="hole" src={hole} alt="" />
          <img class="contain" src={contain} alt="" />
          <img class="mainimg" src={firstimage} alt=""></img>
        </div>
      </div>

      {/* meeting  */}
      <div id="meetings" class="content2">
        <div class="meetings">
          <h1 class="meethead">Meethings</h1>

          <div class="meets">
            <div class="meeting-box">
              <strong>Meeting Schedule from Demo Portal</strong>
              <div class="time">
                <div>
                  {" "}
                  <i
                    className="pi pi-map-marker"
                    style={{ fontSize: "1rem" }}
                  ></i>{" "}
                  Office of Mobile Team
                </div>
                <div>
                  <i
                    className="pi pi-calendar-minus"
                    style={{ fontSize: "1rem" }}
                  ></i>{" "}
                  08-12-2023
                </div>
                <div>
                  <i className="pi pi-clock" style={{ fontSize: "1rem" }}></i>{" "}
                  04:57 AM
                </div>
              </div>

              <div class="registeredon">
                <div class="h1">Registered On:</div>
                <div>11-12-2023 , 11:00 AM</div>
              </div>
            </div>
          </div>
          <div class="meets">
            <div class="meeting-box">
              <strong>Meeting Schedule from Demo Portal</strong>
              <div class="time">
                <div>
                  {" "}
                  <i
                    className="pi pi-map-marker"
                    style={{ fontSize: "1rem" }}
                  ></i>{" "}
                  Office of Mobile Team
                </div>
                <div>
                  <i
                    className="pi pi-calendar-minus"
                    style={{ fontSize: "1rem" }}
                  ></i>{" "}
                  08-12-2023
                </div>
                <div>
                  <i className="pi pi-clock" style={{ fontSize: "1rem" }}></i>{" "}
                  04:57 AM
                </div>
              </div>

              <div class="registeredon">
                <div class="h1">Registered On:</div>
                <div>11-12-2023 , 11:00 AM</div>
              </div>
            </div>
          </div>
          <div class="meets">
            <div class="meeting-box">
              <strong>Meeting Schedule from Demo Portal</strong>
              <div class="time">
                <div>
                  <i
                    className="pi pi-map-marker"
                    style={{ fontSize: "1rem" }}
                  ></i>
                  Office of Mobile Team
                </div>
                <div>
                  <i
                    className="pi pi-calendar-minus"
                    style={{ fontSize: "1rem" }}
                  ></i>{" "}
                  08-12-2023
                </div>
                <div>
                  <i className="pi pi-clock" style={{ fontSize: "1rem" }}></i>{" "}
                  04:57 AM
                </div>
              </div>

              <div class="registeredon">
                <div class="h1">Registered On:</div>
                <div>11-12-2023 , 11:00 AM</div>
              </div>
            </div>
          </div>
        </div>
        {/* videos */}
        <div class="videos">
          <h1>Videos</h1>
          <Slider {...settings}>
            {data.map((d, keys) => (
              <div class="item">
                <span class="img-dur">
                  <i className="pi pi-clock" style={{ fontSize: "1rem" }}></i>{" "}
                  12:00
                </span>

                <video poster={d.img} class="imgs" alt="" />

                <div class="data">
                  <p>{d.name}</p>
                  <span class="flex-text">
                    {" "}
                    <div class="date">
                      <i
                        className="pi pi-calendar-minus"
                        style={{ fontSize: "1rem" }}
                      ></i>{" "}
                      {d.date}
                    </div>
                    {"  "} <span class="time">{d.time}</span>{" "}
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Content3 />
    </div>
  );
};

const data = [
  {
    name: `Gender Responsiveness
    Governance`,
    img: img1,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img2,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img3,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img4,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img5,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img6,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img4,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img5,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img6,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img1,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img2,
    date: "12/May/2023",
    time: "02:00 PM",
  },
  {
    name: `Gender Responsiveness
    Governance`,
    img: img3,
    date: "12/May/2023",
    time: "02:00 PM",
  },
];

export default main;
