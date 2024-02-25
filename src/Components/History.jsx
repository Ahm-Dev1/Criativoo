import React from 'react'

//images
import first from '../imagess 4/10-Project-Done.png'
import second from '../imagess 4/7-Happy-Costumer.png'
import third from '../imagess 4/8-Award-Winning.png'
import forth from '../imagess 4/9-Team-Crew.png'



const History = () => {
  return (
    <div className='History'>
        <div className='Details'>
            <div>
                <img width={'90px'} src={first} alt="Projects" />
                <h1 className='tor'>150 <h1 className='whi'>+</h1></h1>
                <p>Projects Done</p>
            </div>
            <div>
                <img width={'90px'} src={second} alt="Projects" />
                <h1 className='tor'>75 <h1 className='whi'>+</h1></h1>
                <p>Happy Customer</p>
            </div>
            <div>
                <img width={'90px'} src={third} alt="Projects" />
                <h1 className='tor'>20 <h1 className='whi'>+</h1></h1>
                <p>Award Winning</p>
            </div>
            <div>
                <img width={'90px'} src={forth} alt="Projects" />
                <h1 className='tor'>45 <h1 className='whi'>+</h1></h1>
                <p>Team Members</p>
            </div>
            
        </div>
        




        <div className='gridia'>
            
        </div>
    </div>
  )
}

export default History