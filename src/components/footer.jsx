import React from 'react'
import pmlogo from '../assests/pm-india-logo.png'
import datagovlogo from '../assests/data-gov-logo.png'
import swaraj from '../assests/egramswaraj.png'
import digitallogo from '../assests/digital-india-logo.png'
import niclogo from '../assests/niclogo.png'

export default function footer() {
  return (
    <div class="footer">
      <div class="logo-section">
        <img src={pmlogo} alt="" />
        <img src={datagovlogo} alt="" />
        <img src={swaraj} alt="" />
        <img src={digitallogo} alt="" />

      </div>

      <div class="footer-end">
        
        <div class='foot-btn'>
        <button class='btn'>Contact Us</button>
        <button class='btn'>Terms & Conditions</button>
        <button class='btn'>Privacy Policy</button>

        </div>
        

        <img src={niclogo} alt="" />

          <div class='foot-para'>
          <p>Content on this webiste is owned,updated and managed by the <span>Ministry of Panchayati Raj</span>,</p>
          <p>Government of India </p>
          <p>Designed and Developed by <span>National Informatics Center</span></p>
          <p>Last updated on September 30,2021 | Total visitors till now:6367713</p>
          </div>

        
      </div>
       
   
        

    </div>
      
  
  )
}
