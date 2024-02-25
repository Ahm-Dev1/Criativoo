import React from 'react'



//icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='Footer'>
        <section className='nav-footer'>
            <h1>Criativo</h1>
            <p>CREATIVE AGENCY</p>
            <div className='linkHolder' >
            <ul className='navLinks' >
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact Us</a></li>
                {/* <li ><a className='searchIcon' href="#"><IoSearch /></a></li> */}
            </ul>
            
        </div>

        </section>

        <section className='footer_second_sec'>
                <p className='sec-p'>Welcome to our creative design agency,
                         where imagination takes shape and dreams become visuals that captivate.
                </p>
                <div className='footer_social'>
                   <a href="#"><FaFacebook className='footer_social_icons'/></a>
                    <a href="#"><FaTwitter className='footer_social_icons'/></a>
                    <a href="#"><IoLogoInstagram className='footer_social_icons'/></a>
                    <a href="#"><FaPinterestP className='footer_social_icons'/></a>

                </div>
        </section>

        <section className='footer_third_sec'>
          <div className='copyRight'>
            Copyright © Criativo Creative Agency. All Right Reserved By Ahmad Ashraf.

          </div>

        </section>
    </div>
  )
}

export default Footer