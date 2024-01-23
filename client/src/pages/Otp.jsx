import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import logSignActions from '../store/login_signup/loginSignupActions'
import { handleError } from '../components/ErrorPopUp'
import Cookie from '../components/Cookie'
import LandingHeading from '../components/LandingHeading'


function Otp() {
    const navigate=useNavigate()
    const cookie=Cookie()
    const verifyData=cookie.getpublicUserCookie()
    console.log(verifyData)
    const dispatch=useDispatch()
    const email=useSelector(state=>state.logSign.email)
    const otp=useSelector(state=>state.logSign.otp)
    const isEmployeer=useSelector(state=>state.logSign.isEmployeer)
    const companyOrProfession=useSelector(state=>state.logSign.confirmPassword)
    const password=useSelector(state=>state.logSign.password)

    const [sendOtp,setSendOtp]=useState(false)

    const initialOtpSend=async()=>{
      await dispatch(logSignActions.sendOtp({email:verifyData.email}))
    }

    

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const data={
          email:verifyData.email,
          otp:otp,
          password:verifyData.password,
          isEmployeer:verifyData.isEmployeer,
          CompanyOrProfession:verifyData.CompanyOrProfession
        }

        const response=await dispatch(logSignActions.verifyOtp(data))
        if(response.err){
          handleError(response.err)
          setTimeout(()=>{navigate('/')},3000)
        }
        else{
          cookie.setpublicUserCookie(response.data)
          navigate('/login')
        }

    }

  return (


    <div className='ladingPageContainer' >
            <LandingHeading/>
            <div className='landingPageMainCard '>
                <div className='landingPageSubCard landingPageSubsImage'>
                    <div className='imagebgText'>
                      <h2 className='imagebgTextHead'>Get Started</h2>
                      <p className='imagebgTextPara'>We works as a bridge for the client and contact employees. Get paid for your skill.</p>
                    </div>
                </div>
                <div className='landingPageSubCard lrForm'>
                <h2 className='lrFormHeading'>Email Verification</h2>
                  <form className='lgButtonDiv lrFormForm' onSubmit={handleSubmit}>
                    <div>
                      <label className='labels'>Otp</label>
                      <br/>
                      <input className='inputField' type='email' placeholder='email' value={email} onChange={(e)=>dispatch(logSignActions.setEmail(e.target.value))}/>
                    </div>
                      <div>
                      {!sendOtp?<button className='lrSubmitButton'
                        onClick={()=>{setSendOtp(!sendOtp) 
                        initialOtpSend()
                      }}>sendOtp</button>:<div></div>}
                      </div>
                      <div>
                      {sendOtp ?<input className='inputField' type='number' placeholder='enter the otp' value={otp} onChange={(e)=>dispatch(logSignActions.setOtp(e.target.value))}/>:<div></div>}
                      </div>
                      <div>
                      {sendOtp?<input className='lrSubmitButton' type='submit' value='Verify'/>:<div></div>}
                      </div>
                  </form>
                </div>
            </div>

        </div>
  )
}

export default Otp