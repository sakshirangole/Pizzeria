import React from 'react'
import BannerImage from "../Assets/pizza.jpeg"
import '../Styless/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home'  style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1 id='hi'>Pedro's Pizzeriaa</h1>
<p>PIZZA TO FIT ANY TASTE</p>
<Link to={'/menu'}>
<button>Order Now</button>
</Link>
      </div>

    </div>
 
  )
}

export default Home
