import React from 'react'


//images
import girl from '../imagess 4/Untitled-1.png'
import cleancode from '../imagess 4/Clean-Code.png' 
import ModernDesign from '../imagess 4/Modern-Design.png' 


const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <div className='aboutUs-img col-lg-5 col-md-12 col-sm-12 col-12'>
                <img width={'380px'} src={girl} alt="Girl" />
        </div>
        
        <div className='aboutUs-txt col-lg-7 col-md-12 col-sm-12 col-12'>
            
        <section className='HomeText '>
            <h5>ABOUT US</h5>
            <div className='AboutUs-txt'>
                <h1>We Use <h2 className='torkowaz' >Creativity</h2> to Get <br /> </h1> 
                <h1>Our Clients.</h1>
            </div>
            {/* <h1 className='design-agrncy'>Our Clients</h1> */}
            
            <p className='Line'>___________</p>

            <p className='HomeText-p'>"Welcome to our creative design agency,
                where imagination takes shape and dreams become visuals that captivate."</p>

            <section className='aboutUs-txt-images'>
                <div className='CleanCode'>
                    <img width={'60px'} height={'60px'} src={cleancode} alt="cleancode" />

                    <div className='CleanCode-txt'>
                        <h3>Clean Code</h3>
                        <p>Welcome to our creative design agency</p>
                    </div>
                </div>
                
                <div className='CleanCode'>
                    <img width={'50px'} height={'50px'} src={ModernDesign} alt="cleancode" />

                    <div className='CleanCode-txt'>
                        <h3>Modern Design</h3>
                        <p>Welcome to our creative design agency</p>
                    </div>
                </div>
            </section>

        </section>
        </div>
    </div>
  )
}

export default AboutUs