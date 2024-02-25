import React from 'react'

//icons
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

//Images
import vid1 from '../imagess 4/11.jpg'
import vid2 from '../imagess 4/apelah.jpg'

const ChooseUs = () => {
  return (
    <div className='ChooseUs '>
        <section className='ChooseUs-Top container'>
            <div className='ChooseUs-Top-Left-article '>
                <p>WHY CHOOSE US</p>
                <h1>30 years <h3>Experience</h3></h1>
                <h1 className='Working-in-creative-txt'>Working in Creative <br /> Agency.</h1>
            </div>
            
            
            <div className='ChooseUs-Top-right-article'>
                <div>
                    <p className='article-right-chooseUS'>Welcome to our creative design agency,
                        where imagination takes shape and dreams become visuals that captivate Welcome to our creative design agency,
                        where imagination takes shape and dreams become visuals that captivate  Welcome to our creative design agency,
                        where imagination takes shape and dreams become visuals that captivate.</p>
                </div>

                <div className='ChoosUs-Right-bottom'>
                    <p><IoCheckmarkDoneCircleOutline className='ChooseUs-icon'/> 100% Happy Customers</p>
                    <p><IoCheckmarkDoneCircleOutline className='ChooseUs-icon'/> Experienced Team </p>
                </div>
            </div>
        </section>



        <section className='ChooseUs-Bottom container'>
            <div className='ChooseUS-img1 col-lg-6 col-md-6 col-sm-12 col-12'>
                <img width={'400px'} src={vid2} alt="video " />
            </div>



            <div className='ChooseUS-img2 col-lg-6 col-md-6 col-sm-12 col-12'>
                <img width={'400px'} height={'240px'} src={vid1} alt="video " />
            </div>
        </section>
    </div>
  )
}

export default ChooseUs