import React from 'react'
import Banner from '../assests/Banner.png'


export default function home() {
  return (
    <div id='home' class="banner">
      <img src={Banner} height={"100%"} alt='banner'  width={"100%"}/>
    </div>
  )
}
