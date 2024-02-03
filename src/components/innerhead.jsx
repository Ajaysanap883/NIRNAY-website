import React from 'react'
import nirnaylogo from "../assests/logo.png";
import peoplelogo from "../assests/Image.png";

export default function innerhead() {
  return (
    <div class="logohead">
        <div >
          <img src={nirnaylogo} alt="nirnaylogo" />
          {/* <span> NIRNAY <br />
            (<bold>N</bold>ational <bold>I</bold>nitiative for <bold>R</bold>ural India to <bold>N</bold>avigate, <br /> InnovAte and Resolve Panchata<bold>Y</bold>at decisions)
          </span> */}

          <span>
            <span>NIRNAY</span>
            <p>(<b><u>N</u></b>ational <b><u>I</u></b>nitiative for <b><u>R</u></b>ural India to <b><u>N</u></b>avigate, <br /> Innov<b><u>A</u></b>te and Resolve Panchata<b><u>Y  </u></b>at decisions)</p>

          </span>
        </div>
        <span>
          <img src={peoplelogo} alt="peoplelogo" />
        </span>
      </div>
  )
}
