import React from 'react'
import './css/whatWeGot.css'
import img1 from '../assets/what_we_got/animate.png'
import img2 from '../assets/what_we_got/content_writing.png'
import img3 from '../assets/what_we_got/data.png'
import img4 from '../assets/what_we_got/music.png'
import img5 from '../assets/what_we_got/translation.png'

function WhatWeGot() {


  return (
    <div className='whatWeGotContainer'>
      <div className='whatWeGotContainerBlock'>
        <h2 style={{color:'#0065b2',fontFamily:'Arial, Helvetica, sans-serif',fontSize:'2rem'}}>What We've Got</h2>
        <ul className='whatWeGotUl'>
          <li className="whatWeGotCard">
              <img className='whatWeGotCardImg' src={img1}/>
              <p className='whatWeGotCardName'>Animate</p>
          </li>

          <li className="whatWeGotCard">
              <img className='whatWeGotCardImg' src={img2}/>
              <p className='whatWeGotCardName'>Content Writing</p>
          </li>

          <li className="whatWeGotCard">
              <img className='whatWeGotCardImg' src={img3}/>
              <p className='whatWeGotCardName'>Data and Analysis</p>
          </li>

          <li className="whatWeGotCard">
              <img className='whatWeGotCardImg' src={img4}/>
              <p className='whatWeGotCardName'>Music And Video</p>
          </li>

          <li className="whatWeGotCard">
              <img className='whatWeGotCardImg' src={img5}/>
              <p className='whatWeGotCardName'>Writing Translation</p>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default WhatWeGot