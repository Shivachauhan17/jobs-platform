import React from 'react'
import './css/registerForm.css'
import {useDispatch,useSelector} from 'react-redux'
import logSignActions from '../store/login_signup/loginSignupActions'
import loginSignupActions from '../store/login_signup/loginSignupActions'
import { handleError } from '../components/ErrorPopUp'
import Cookie from './Cookie'
import {useNavigate} from 'react-router-dom'


function RegisterForm() {

    const navigate=useNavigate() 
    const cookie=Cookie() 
    const dispatch=useDispatch()
    const email=useSelector(state=>state.logSign.email)
    const isEmployeer=useSelector(state=>state.logSign.isEmployeer)
    const ComapanyOrProfession=useSelector(state=>state.logSign.ComapanyOrProfession)
    const password=useSelector(state=>state.logSign.password)
    const confirmPassword=useSelector(state=>state.logSign.confirmPassword)

    const formData={
      email:email,
      isEmployeer:isEmployeer,
      CompanyOrProfession:ComapanyOrProfession,
      password:password,
      confirmPassword:confirmPassword
    }
    
    const handleSubmit=async (e)=>{
      e.preventDefault()
      const response=await dispatch(loginSignupActions.postRegister(formData))
      if(response.err){
        handleError(response.err)
        setTimeout(()=>{navigate('/')},3000)
      }
      else{
        cookie.setpublicUserCookie(response.data)
        navigate('/otp')
      }

    }


  return (
        <div className='landingPageSubCard lrForm'>
        <h2 className='lrFormHeading'>Register</h2>
        <form className='lgButtonDiv lrFormForm' onSubmit={handleSubmit}>
            <div>
            <label className='labels'>Email</label>
            <br/>
            <input className='inputField' type='email' value={email} onChange={(e)=>dispatch(logSignActions.setEmail(e.target.value))}/>
            </div>
            <div>
            <label className='labels'>Employeer OR Job Seeker</label>
            <br/>
            <select className='inputField' value={isEmployeer} onChange={(e)=>dispatch(logSignActions.setIsEmployeer(e.target.value))}>
                <option value=" ">--please--choose--a--option</option>
                <option value="1">Employeer</option>
                <option value="0">Job Seeker</option>
            </select>
            </div>
            <div>
            <label className='labels'>Company or profession</label>
            <br/>
            <input className='inputField'  value={ComapanyOrProfession} onChange={(e)=>dispatch(logSignActions.setCompanyOrProfession(e.target.value))} />
            </div>
            <div>
            <label className='labels'>Password</label>
            <br/>
            <input className='inputField' value={password} minLength="8" type="password" onChange={(e)=>dispatch(logSignActions.setPassword(e.target.value))}/>
            </div>
            <div>
            <label className='labels'>Confirm Password</label>
            <br/>
            <input className='inputField' value={confirmPassword} minLength="8" type="password" onChange={(e)=>dispatch(logSignActions.setConfirmPassword(e.target.value))}/>
            </div>
            <input className='lrSubmitButton' type='submit' value="register"/>
        </form> 
    </div>
  )
}

export default RegisterForm