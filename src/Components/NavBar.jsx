import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-scroll";





//Icons
import { IoSearch } from "react-icons/io5";



const NavBar = () => {

   

  return (
    <div className='container NavBar'>
        <div>
             <h1 className='criativo'>Criativo</h1>
             <p className='agency'> cerative agency</p>
        </div>
        <div className='linkHolder' >
            <ul className='navLinks' >
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact Us</a></li>
                <li ><a className='searchIcon' href="#"><IoSearch /></a></li>
            </ul>
            
        </div>
    </div>
  )
}

export default NavBar