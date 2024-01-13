import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import logSignActions from '../store/login_signup/loginSignupActions'

function Register() {
    const dispatch=useDispatch()
    const email=useSelector(state=>state.logSign.email)
    const isEmployeer=useSelector(state=>state.logSign.isEmployeer)
    const ComapanyOrProfession=useSelector(state=>state.logSign.ComapanyOrProfession)
    const password=useSelector(state=>state.logSign.password)
    const confirmPassword=useSelector(state=>state.logSign.confirmPassword)
  return (
    <div>
        <form onSubmit={}>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>dispatch(logSignActions.setEmail(e.target.value))}/>
            <label>Employeer OR Job Seeker</label>
            <select value={isEmployeer}>
                <option value="">--please--choose--a--option</option>
                <option value="1">Employeer</option>
                <option value="0">Job Seeker</option>
            </select>
            <label>Company or profession</label>
            <input  value={ComapanyOrProfession} onChange={(e)=>dispatch(logSignActions.setCompanyOrProfession(e.target.value))} />
            <label>Password</label>
            <input value={password} minLength="8" type="password" onChange={(e)=>dispatch(logSignActions.setConfirmPassword(e.target.value))}/>
            <label>Password</label>
            <input value={confirmPassword} minLength="8" type="password" onChange={(e)=>dispatch(logSignActions.setPassword(e.target.value))}/>
            <input type='submit' value="register"/>
        </form> 
    </div>
  )
}

export default Register