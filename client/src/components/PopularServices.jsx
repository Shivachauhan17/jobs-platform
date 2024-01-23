import React from 'react'
import PopularServiceCard from './PopularServiceCard'
import './css/popularServices.css'

function PopularServices() {

    const popularServices=[{head:'AI And ML',path:'../assets/popular_cards_image/1.jpg'},
                            {head:'Web Dev',path:'../assets/popular_cards_image/2.jpg'},
                            {head:'Android Dev',path:'../assets/popular_cards_image/3.jpg'},
                            {head:'Security',path:'../assets/popular_cards_image/4.jpg'}
                ]

  return (
    <div className='popularServicesContainer'>
        <div>
            <h2 style={{color:'#0065b2',fontFamily:'Arial, Helvetica, sans-serif',fontSize:'2rem'}}>Popular Services</h2>
        </div>
        <div className='popularCardsBlock'>{
            popularServices.map((item,index)=>(
                 <PopularServiceCard key={index} heading={item.head} image={item.path}/>
            ))
            
        }
        </div>

    </div>
  )
}

export default PopularServices