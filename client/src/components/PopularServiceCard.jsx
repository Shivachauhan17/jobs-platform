import React from 'react'
import './css/popularServiceCard.css'

function PopularServiceCard({heading,image}) {
  return (
          <div className='popularServiceCard' style={{backgroundImage:`url(${image})`}}>
            <h3 className='popularServiceCardHeading'>{heading}</h3>
          </div>
  )
}

export default PopularServiceCard