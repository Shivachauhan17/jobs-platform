import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import logSignActions from '../store/login_signup/loginSignupActions'


function Otp() {
    const dispatch=useDispatch()
    const email=useSelector(state=>state.logSign.email)
    const otp=useSelector(state=>state.logSign.otp)

    useEffect(()=>{
      logSignActions.sendOtp(email)
    },[])

  return (
    <div>
        <form>
            <label>Otp:</label>
            <input type='number' placeholder='enter the otp' value={otp} onChange={(e)=>dispatch(logSignActions.setOtp(e.target.value))}/>
            <input type='submit' value='Verify'/>
        </form>
    </div>
  )
}

export default Otp