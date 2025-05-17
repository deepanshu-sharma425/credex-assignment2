import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'
function Footer() {
  return (
    <div className="footer">
            <div className="border"></div>
        <div className="footerinfo">
            <img src={logo} alt="" />
            <p>Copyright © 2025</p>
        </div>



    </div>
  )
}

export default Footer