import React from 'react'


//images
import Talk from '../imagess 4/1-1 - Copy.png'
import Ruby from '../imagess 4/1-2 - Copy.png'
import Sky from '../imagess 4/1-3 - Copy.png'
import Walk from '../imagess 4/1-5.png'
import Dee from '../imagess 4/1-6.png'

const Partners = () => {
  return (
    <div className='Partners'>
        
        <div className='partners-names'>
            <div className='partner col-lg-2 col-md-2 col-sm-2 col-2'>
                <img width={'170px'} src={Talk} alt="Talk & Action" />
            </div>

            <div className='partner col-lg-2 col-md-2 col-sm-2 col-2'>
                <img width={'170px'} src={Ruby} alt="Ruby" />
            </div >

            <div className='partner col-lg-2 col-md-2 col-sm-2 col-2'>
                <img width={'170px'} src={Sky} alt="Sky Cloud" />
            </div>

            <div className='partner col-lg-2 col-md-2 col-sm-2 col-2'>
                 <img width={'170px'} src={Walk} alt="Walk Away" />
            </div>

            <div className='partner col-lg-2 col-md-2 col-sm-2 col-2'>
                <img width={'170px'} src={Dee} alt="deePay" />
            </div>
        </div>


        <div className='partner-gridiant'>
           
        </div>
    </div>
  )
}

export default Partners