import React from 'react'

//icons
import { FaCalendarAlt } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";


const OurBlog = () => {
  return (
    <div className='OurBlog'>
        <div className='OurBlog-holder container'>
            <section className='Blog-top'>
                <p className='Sec-title'>OUR BLOG</p>
                <h1 className='Blog-heading'>Our Latest <h1 className='Sec-title'>News</h1>.</h1>
                <p className='Line'>___________</p>
                <p className='sec-p'>Welcome to our creative design agency,
                    where imagination takes shape and dreams become visuals that captivate.
                  </p>


            </section>


            <section className='Blog-bottom'>
                <div className='Blog-card   col-lg-3 col-md-3 col-sm-6 col-6'>
                    <div className='Blog-card-img'>

                    </div>
                    <div >
                        <h5 className='Sec-title'>Consectetur Adipiscing elit Curbitur Vel Ornare</h5>
                    </div>
                    <div>
                        <p className='sec-p'>Welcome to our creative design agency,
                            where imagination takes shape and dreams become visuals that captivate.
                        </p>
                    </div>
                    <div className='Blog-card-footer'>
                        <p><FaCalendarAlt className='blog-footer-icon'/> June 03,2021</p>
                        <p><GrTasks className='blog-footer-icon'/> business</p>
                    </div>
                </div>


                <div className='Blog-card   col-lg-3 col-md-3 col-sm-6 col-6'>
                    <div className='Blog-card-img1'>

                    </div>
                    <div >
                        <h5 className='Sec-title'>Consectetur Adipiscing elit Curbitur Vel Ornare</h5>
                    </div>
                    <div>
                        <p className='sec-p'>Welcome to our creative design agency,
                            where imagination takes shape and dreams become visuals that captivate.
                        </p>
                    </div>
                    <div className='Blog-card-footer'>
                        <p><FaCalendarAlt className='blog-footer-icon'/> June 03,2021</p>
                        <p><GrTasks className='blog-footer-icon'/> business</p>
                    </div>
                </div>


                <div className='Blog-card   col-lg-3 col-md-3 col-sm-6 col-6'>
                    <div className='Blog-card-img2'>

                    </div>
                    <div >
                        <h5 className='Sec-title'>Consectetur Adipiscing elit Curbitur Vel Ornare</h5>
                    </div>
                    <div>
                        <p className='sec-p'>Welcome to our creative design agency,
                            where imagination takes shape and dreams become visuals that captivate.
                        </p>
                    </div>
                    <div className='Blog-card-footer'>
                        <p><FaCalendarAlt className='blog-footer-icon'/> June 03,2021</p>
                        <p><GrTasks className='blog-footer-icon'/> business</p>
                    </div>
                </div>

               
            </section>
        </div>

    </div>
  )
}

export default OurBlog