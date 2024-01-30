import React from 'react'
// import PopularServiceCard from './PopularServiceCard'
import './css/popularServices.css'
import './css/popularServiceCard.css'
import img1 from '../assets/popular_cards_image/1.jpg'
import img2 from '../assets/popular_cards_image/2.jpg'
import img3 from '../assets/popular_cards_image/3.jpg'
import img4 from '../assets/popular_cards_image/4.jpg'


function PopularServices() {



  return (
    <div className='whatWeGotContainer popularServicesContainer'>
        <div className='whatWeGotContainerBlock'>
        <div>
            <h2 style={{color:'#0065b2',fontFamily:'Arial, Helvetica, sans-serif',fontSize:'2rem'}}>Popular Services</h2>
        </div>
        <div className='popularCardsBlock'>
            <div className='popularServiceCard' >
                <img className="popularServiceCardImg" src={img1}/>
                <h3 className='popularServiceCardHeading'>AI And ML</h3>
            </div>
            
            <div className='popularServiceCard' >
                <img className="popularServiceCardImg" src={img2}/>
                <h3 className='popularServiceCardHeading'>Web Development</h3>
            </div>

            <div className='popularServiceCard' >
                <img className="popularServiceCardImg" src={img3}/>
                <h3 className='popularServiceCardHeading'>Android Development</h3>
            </div>

            <div className='popularServiceCard' >
                <img className="popularServiceCardImg" src={img4}/>
                <h3 className='popularServiceCardHeading'>Cyber Security</h3>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default PopularServices