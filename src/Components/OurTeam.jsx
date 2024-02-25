import React from 'react'


//Images
import ex1 from '../imagess 4/T1.png'
import ex2 from '../imagess 4/T2.png'
import ex3 from '../imagess 4/T3.png'
import ex4 from '../imagess 4/T4.png'


//Icons
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";


const OurTeam = () => {
  return (
    <div className='OurTeam '>
       <div className='ourteam-one '>
            <p className='sec-title'>OUR TEAM</p>
            <h1>Meet Expert Team.</h1>
            <p className='Line'>___________</p>
            <p className='ourTeam-p'>Welcome to our creative design agency,
             where imagination takes shape and dreams become visuals that captivate."
             </p>
       </div>


       <div className='ourteam-two '>
            <div className='two-top container'>
                
                <div className='Expert col-lg-6 col-md-6 col-sm-6 col-6'>
                    <div>
                        <img width={'200px'} src={ex1} alt="Mike" />
                    </div>
                    <div>
                        <h4 className='Expert-name'>Mike Washoski</h4>
                        <p className='Expert-Major'>Designer</p>
                        
                        <p className='Expert-p'> where imagination takes shape and dreams become visuals</p>

                        <div className='Expert-Social'>
                            <AiFillInstagram className='Social-Media'/>
                            <FaFacebook className='Social-Media'/>
                            <FaTwitter className='Social-Media'/>

                        </div>
                    </div>

                    
                </div>

                <div className='Expert col-lg-6 col-md-6 col-sm-6 col-6'>
                    <div>
                        <img width={'200px'} src={ex2} alt="Hanna" />
                    </div>
                    <div>
                        <h4 className='Expert-name'>Hanna Smith</h4>
                        <p className='Expert-Major'>Designer</p>
                        
                        <p className='Expert-p'> where imagination takes shape and dreams become visuals</p>

                        <div className='Expert-Social'>
                            <AiFillInstagram className='Social-Media'/>
                            <FaFacebook className='Social-Media'/>
                            <FaTwitter className='Social-Media'/>

                        </div>
                    </div>

                    
                </div>


            </div>


            <div className='two-top MM container'>
            <div className='Expert col-lg-6 col-md-6 col-sm-6 col-6'>
                    <div>
                        <img width={'200px'} src={ex3} alt="Lexi" />
                    </div>
                    <div>
                        <h4 className='Expert-name'>Lexi Black</h4>
                        <p className='Expert-Major'>Designer</p>
                        
                        <p className='Expert-p'> where imagination takes shape and dreams become visuals</p>

                        <div className='Expert-Social'>
                            <AiFillInstagram className='Social-Media'/>
                            <FaFacebook className='Social-Media'/>
                            <FaTwitter className='Social-Media'/>

                        </div>
                    </div>

                    
                </div>
                
                <div className='Expert col-lg-6 col-md-6 col-sm-6 col-6'>
                    <div>
                        <img width={'200px'} src={ex4} alt="Kevin" />
                    </div>
                    <div>
                        <h4 className='Expert-name'>Kevin Widagdo</h4>
                        <p className='Expert-Major'>Designer</p>
                        
                        <p className='Expert-p'> where imagination takes shape and dreams become visuals</p>

                        <div className='Expert-Social'>
                            <AiFillInstagram className='Social-Media'/>
                            <FaFacebook className='Social-Media'/>
                            <FaTwitter className='Social-Media'/>

                        </div>
                    </div>

                    
                </div>
            </div>
       </div>
    </div>
  )
}

export default OurTeam