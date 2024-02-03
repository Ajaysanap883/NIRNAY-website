import React from "react";

import Innerhead from "./innerhead";
import Navbar from "./navbar";


import bharatsarkarlogo from "../assests/Bharat Sarkar.png";

export default function header() {
  return (
    <div class="head">
      {/* head 1 */}
      <div class="header">
        <span class=".logotxt">
          <img src={bharatsarkarlogo} alt="bharatsarkarlogo" />
          <pre> Government of India | Ministry of Panchatayati Raj</pre>
        </span>

        <p>Vibrant Gram Sabha</p>
      </div>

      {/* head 2 */}
      <Innerhead />

      <Navbar />
    </div>
  );
}
