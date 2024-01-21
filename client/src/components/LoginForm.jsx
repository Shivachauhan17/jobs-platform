import React from 'react'
import './css/loginForm.css'
import {useDispatch,useSelector} from 'react-redux'
import logSignActions from '../store/login_signup/loginSignupActions'
import {useNavigate} from 'react-router-dom'
import { handleError } from './ErrorPopUp'
import Cookie from './Cookie'

function LoginForm() {

    const cookie=Cookie()
    const navigate=useNavigate() 
    const dispatch=useDispatch()
    const email=useSelector(state=>state.logSign.email)
    const password=useSelector(state=>state.logSign.password)
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const data={
        email:email,
        password:password
      }
      const response=await dispatch(logSignActions.login(data))
      if(response.err){
        handleError(response.err)
        setTimeout(()=>{navigate('/')},3000)
      }
      else{
        cookie.setpublicUserCookie(response.data)
        navigate('/home')
      }

    }
  return (
    <div className='landingPageSubCard lrForm' >
        <h2 className='lrFormHeading'>Login</h2>
        <form className='lgButtonDiv' onSubmit={handleSubmit}>
            <div>
            <label className='labels'>Email</label>
            <br/>
            <input className='inputField' type='email' pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,63}$" value={email} onChange={(e)=>dispatch(logSignActions.setEmail(e.target.value))} required/>
            </div>

            <div>
            <label className='labels'>Password</label>
            <br/>
            <input className='inputField' value={password} minLength="8" type="password" onChange={(e)=>dispatch(logSignActions.setPassword(e.target.value))} required/>
            </div>

            <input className='lrSubmitButton' type='submit' value="Login"/>
        </form> 
    </div>
  )
}

export default LoginForm