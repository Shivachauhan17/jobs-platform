import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import logSignActions from '../store/login_signup/loginSignupActions'


function Otp() {
    const dispatch=useDispatch()
    const email=useSelector(state=>state.logSign.email)
    const otp=useSelector(state=>state.logSign.otp)

  return (
    <div>
        <form>
            <label>Otp:</label>
            <input type='password' value={otp} onChange={(e)=>dispatch(logSignActions.setOtp(e.target.value))}/>
        </form>
    </div>
  )
}

export default Otp