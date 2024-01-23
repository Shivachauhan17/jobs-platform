import React from 'react'
import './css/register.css'
import LandingHeading from '../components/LandingHeading'
import RegisterForm from '../components/RegisterForm'

function Register() {
    
  return (

    <div className='ladingPageContainer' >
            <LandingHeading/>
            <div className='landingPageMainCard registerContainer'>
                <div className='landingPageSubCard landingPageSubsImage'>
                <div className='imagebgText'>
                      <h2 className='imagebgTextHead'>Get Started</h2>
                      <p className='imagebgTextPara'>We works as a bridge for the client and contact employees. Get paid for your skill.</p>
                    </div>
                </div>
                <RegisterForm/>
            </div>

        </div>
  )
}

export default Register