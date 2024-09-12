import React from 'react'
import "../layout/Footer.scss"

function Footer() {
  return (
    <div className='footer'>
            <div className='footer-logo'>
                <img src="src/assets/logofooter.png" alt="logo"/>
                <div className='footer-text'>© 2020 kasa. All right reserved </div>
        </div>
    </div>
  )
}

export default Footer