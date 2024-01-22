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
                    {/* <img/> */}
                </div>
                <RegisterForm/>
            </div>

        </div>
  )
}

export default Register