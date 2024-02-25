import React from 'react'
import { FaPlay } from "react-icons/fa";
import img1 from '../imagess 4/portrait.png'

const Home = () => {
  return (
    <div className='Home'>
       <div className='HomeText '>
        <h5>CREATIVE AGENCY</h5>
        <div className='HomeText-we-are'>
            <h1>WE ARE </h1> <p> ____</p> <h6 className='creative'> CREATIVE</h6> 
        </div>
        <h1 className='design-agrncy'>DESIGN AGENCY</h1>
        
        <p className='Line'>___________</p>

        <p className='HomeText-p'>"Welcome to our creative design agency,
             where imagination takes shape and dreams become visuals that captivate."</p>

        <div className='About-us-btn'>
            <button><FaPlay /></button>
           <div className='About-us-txt'>
                <h6>ABOUT US</h6>
                <p className='Line2'>___________</p>
                <p className='Promotion'> Promotion Studio</p>
           </div>
        </div>    
        
       </div>
       <div className='HomeImage '>
            <img className='img1' src={img1} alt="" />
       </div>

       <div className='grediant '>

       </div>
    </div>
  )
}

export default Home