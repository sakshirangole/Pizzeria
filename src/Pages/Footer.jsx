import React from 'react'
import  Instagram  from '@mui/icons-material/Instagram'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import '../Styless/Footer.css'

function Footer() {
  return (
    <div>
      <div className='footer'> 
        <div className='footer-containt'>
          <div className='list1'>
            <div className='same'>
            <h2>Order Now</h2>
            <span>Deals</span>
            <span>Pizza</span>
            <span>Drinks</span>
            <span>Desserts</span>
            </div>
          </div>
          <div className='list2'>
            <div className='same'>
            <h2>About us</h2>
            <span>About us</span>
            <span>Contactless Delivery</span>
            <span>Nutrition</span>
            <span>Career</span>
          </div>
          </div>
          <div className='list3'>
          <div className='same'>
            <h2>Our policies</h2>
            <span>Privacy</span>
            <span>Terms & Conditions</span>
            <span>Responsible disclousure</span>
            <span>FAQ & help</span>
          </div>
          </div>
          <div className='list4'>
          <div className='same'>
            <h2>Visit pedro's pizza</h2>
            <span>Deals</span>
            <span>Pizza</span>
            <span>Drinks</span>
            <span>Desserts</span>
          </div>
        </div>
        <div className='list5'>
        <div className='same'>
        <h1>Follow us </h1>
        <div className='socialMedia'>
<Instagram/><Facebook/><Twitter/><LinkedIn/>
    </div>
  
    </div>
    
    </div>
    </div>
        <p> &copy; 2021 pedrotechpizza.com</p>
      </div>
    </div>
  )
}
export default Footer
