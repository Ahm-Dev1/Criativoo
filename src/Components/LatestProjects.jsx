import React from 'react'


//icons
import { MdDone } from "react-icons/md";

const LatestProjects = () => {
  return (
    <div className='LatestProjects'>

        <div className='latest-top'>
            
            <div className='latest-top-txt col-lg-8 col-md-8 col-sm-6 col-6'>
            <h5>LATEST PTOJECT</h5>
            <div className='AboutUs-txt'>
                <h1>Our <h2 className='torkowaz' >Latest</h2> Cases. </h1> 
                <p className='Line'>___________</p>

                <p className='paragraph1'>Welcome to our creative design agency,
                     where imagination takes shape and dreams become visuals that captivate."
                </p>

                <p className='paragraph2'><MdDone className='icn'/> where imagination takes shape and dreams become visuals that captivate</p>
                <p className='paragraph2'><MdDone className='icn' /> Welcome to our creative design agency</p>
            </div>
            </div>
            
            <div className='latest-top-img col-lg-4 col-md-4 col-sm-6 col-6'>

            </div>
        </div>


        <div className='latest-bottom'>

           
            <div className='latest-bottom-img1 col-lg-4 col-md-4 col-sm-6 col-6'></div>
            <div className='latest-bottom-img2 col-lg-4 col-md-4 col-sm-6 col-6'></div>
            <div className='latest-bottom-img3 col-lg-4 col-md-4 col-sm-6 col-6'></div>

        </div>

    </div>
  )
}

export default LatestProjects