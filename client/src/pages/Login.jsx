import React from 'react'
import LandingHeading from '../components/LandingHeading'
import LoginForm from '../components/LoginForm'

function Login() {
    

  return (
    
    <div className='ladingPageContainer'>
            <LandingHeading/>
            <div className='landingPageMainCard'>
                <div className='landingPageSubCard landingPageSubsImage'>
                    {/* <img/> */}
                </div>
                <LoginForm/>
            </div>

        </div>
  )
}

export default Login