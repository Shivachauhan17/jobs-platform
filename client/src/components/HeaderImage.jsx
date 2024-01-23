import React from 'react'
import './css/headerImage.css'
import img from '../assets/header_background/1.png'

function HeaderImage() {
  return (
    <div className='headerImageImageBlock'>
        <img className='headerImageImage' src={img}/>
    </div>
  )
}

export default HeaderImage