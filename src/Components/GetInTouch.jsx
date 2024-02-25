import React, { useRef }  from 'react'
import emailjs from '@emailjs/browser';
//icons
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";



const GetInTouch = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jwllvmb', 'template_iabzimg', form.current, 'wH_PLNLE2PoK2k6fn')
        .then((result) => {
            document.querySelector('.Email_sent_alert').style.display = 'flex';
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='GetInTouch'>
        <section className='getInTouch-holder container'>
            
            <div className='Get-in-touch-left col-lg-6 col-md-12 col-sm-12 col-12'>
                <form  className='contact-form' ref={form} onSubmit={sendEmail}>
                    <label >Your Name</label>
                    <input type="text"  required name="user_name"/>

                    <label >Your Email</label>
                    <input type="text"  required name="user_email"/>

                    <label>Your Message (optional)</label>
                    <input type="text" className='Contact-message' name="message" />

                    <input className='Submit_email' type="submit" value="Send" />
                </form>
            </div>

            <div className='Get-in-touch-right col-lg-6 col-md-12 col-sm-12 col-12'>
                <p className='Sec-title'>TESTIMONIALS</p>
                    <h1 className='left-heading'>Get In <h1 className='Sec-title'>Touch</h1>.</h1>
                    <p className='Line'>___________</p>
                    <p className='sec-p'>Welcome to our creative design agency,
                         where imagination takes shape and dreams become visuals that captivate.
                    </p>

                    <div className='Contact-info'>
                        <FaLocationDot className='Contact-info-icon'/>
                        <div>
                            <h5>Office Address</h5>
                            <p>99th,Arround St. Pku City, 28292</p>
                        </div>
                    </div>


                    <div className='Contact-info'>
                        <IoCall className='Contact-info-icon'/>
                        <div>
                            <h5>Call Us</h5>
                            <p>+(827) 123 - 456 - 7891</p>
                        </div>
                    </div>


                    <div className='Contact-info'>
                        <HiOutlineMailOpen className='Contact-info-icon'/>
                        <div>
                            <h5>Mail Us</h5>
                            <p>info@evani.com</p>
                        </div>
                    </div>
                   
            </div>
            <div className='Email_sent_alert' >
                Email Sent Successfully!
            </div>
            
        </section>

        <div className='Dark-bg-contact'></div>
    </div>
  )
}

export default GetInTouch