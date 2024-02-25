import React from 'react'


//images
import brandIdentity from '../imagess 4/6-Brand-Identity.png'
import UIUX from '../imagess 4/1-Ui-Ux.png'
import webDesign from '../imagess 4/5-Web-Design.png'
import videoMarketing from '../imagess 4/4-Video-Marketing.png'



const Services = () => {
  return (
    <div className='Services'>


        <section className='SevicesTxt col-lg-6 col-md-6 col-sm-12 col-12'>
            <h6>OUR SERVICES</h6>
            <h1>What We <h3>Do</h3>.</h1>                
            <p className='Line'>___________</p>

            <article>At our creative design agency, we believe in the power of design to transform ideas into reality.  We are a team of
             passionate and skilled designers, 
              <br /><br />
             or multimedia campaigns, we approach each project with a fresh perspective and a commitment to pushing boundaries.
             </article>

             <button>VIEW ALL</button>
        </section>



        <section className='Services-sec2 col-lg-6 col-md-6 col-sm-12 col-12'>

            <div className='ser-sec-div1 col-lg-6 col-md-5 col-sm-4 col-4'>

                <div className='Brand-identity'>
                     <div>
                        <img width={'70px'} src={brandIdentity} alt="Brand Identity" />
                     </div>
                     <div>
                        <h1>Brand identity</h1>
                        <p>We bring the right people together <br /> to chalenge</p>
                     </div>
                </div>


                <div className='UI-UX'>

                    <div>
                        <img width={'70px'} src={UIUX} alt="UI & UX" />
                    </div>

                    <div>
                        <h1>UI & UX Design</h1>
                        <p>We bring the right people together <br /> to chalenge</p>
                    </div>

                </div>

            </div>


            <div className='ser-sec-div2 col-lg-6 col-md-5 col-sm-4 col-4'>
                <div className='UI-UX'>

                    <div>
                        <img width={'70px'} src={webDesign} alt="UI & UX" />
                    </div>

                    <div>
                        <h1>Website Design</h1>
                        <p>We bring the right people together <br /> to chalenge</p>
                    </div>

                </div>
                            
                <div className='Brand-identity'>
                        <div>
                            <img width={'70px'} src={videoMarketing} alt="Brand Identity" />
                        </div>
                        <div>
                            <h1>Video Marketing</h1>
                            <p>We bring the right people together <br /> to chalenge</p>
                        </div>
                </div>


               
            </div>
        </section>
    </div>
  )
}

export default Services