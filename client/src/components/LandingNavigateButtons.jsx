import React from 'react'
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

function LandingNavigateButtons() {
  return (
    <div className='landingPageSubCard'>
        <div className='lgButtonDiv'>
            <div className='lgButtons'><Link style={{textDecoration: 'none',color: 'black'}} to='login' >Login</Link></div>
            <div className='LandingButtonsOption'>
                <p className="LandingButtonsOptionText" style={{color:'gray'}}>or Register</p>
            </div>
            <div className='lgButtons'><Link style={{textDecoration: 'none',color: 'black'}} to='register' >Signup</Link></div>
        </div>
        <div className='LandingButtonsOption'>
            <p className="LandingButtonsOptionText" style={{color:'gray'}}>or Continue with google</p>
        </div>
        <div className='ldPageGoogleButton'>
            <FcGoogle style={{fontSize:'30px'}}/>
            <p>Sign-in with Google</p>
        </div>
    </div>
  )
}

export default LandingNavigateButtons