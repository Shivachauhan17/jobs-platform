import React from 'react'
import LandingHeading from '../components/LandingHeading'
import LoginForm from '../components/LoginForm'

function Login() {
    

  return (
    
    <div className='ladingPageContainer'>
            <LandingHeading/>
            <div className='landingPageMainCard'>
                <div className='landingPageSubCard landingPageSubsImage'>
                <div className='imagebgText'>
                      <h2 className='imagebgTextHead'>Get Started</h2>
                      <p className='imagebgTextPara'>We works as a bridge for the client and contact employees. Get paid for your skill.</p>
                    </div>
                </div>
                <LoginForm/>
            </div>

        </div>
  )
}

export default Login