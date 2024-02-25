import React from 'react'

//icons
import { ImQuotesRight } from "react-icons/im";



const Testimonials = () => {
  return (
    <div className='Testimonials '>
        <section className='container Testimonials-sec'>
            <div className='Testimonials-left col-lg-6 col-md-12 col-sm-12 col-12'>
                    <p className='Sec-title'>Testimonials</p>
                    <h1 className='left-heading'>What <h1 className='Sec-title'>Client</h1> Says.</h1>
                    <p className='Line'>___________</p>
                    <p className='sec-p'>Welcome to our creative design agency,
                         where imagination takes shape and dreams become visuals that captivate.
                    </p>
                    <button>VIEW ALL TESTMONIALS</button>


            </div>

            <div className='Testimonials-right col-lg-6 col-md-12 col-sm-12 col-12'>
                <section className='right-sec'>
                    <article className='right-top'>
                        <p className='sec-p'> Welcome to our creative design agency,
                            where imagination takes shape and dreams become visuals that captivate.
                        </p>
                    </article>
                    <div className='right-bottom'>
                        <div className='Acc-info'>
                            <div className='Acc-img'>
                                    
                            </div>

                            <div className='Acc-name-major'> 
                                    <h6 >Adam Smith</h6>
                                    <p>Businessman</p>
                            </div>
                        </div>
                        <div>
                            <ImQuotesRight  className='quote'/>
                        </div>
                    </div>
                </section>
            </div>

            <div className='Dark-bg'></div>
        </section>
    </div>
  )
}

export default Testimonials