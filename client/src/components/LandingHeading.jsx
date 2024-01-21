import React from 'react'
import logo from '../assets/logo.png'

function LandingHeading() {
  return (
    <div className='landingHeading'>
        <div className='logoDiv'><img src={logo} className='logo'/></div>
        <div><h2 className='landingPageHeading'>Finds Best <span className='landingPageHeadingDiff'>Projects</span> and Best <span className='landingPageHeadingDiff'>Freelancers</span> For you</h2></div>
    </div>
  )
}

export default LandingHeading