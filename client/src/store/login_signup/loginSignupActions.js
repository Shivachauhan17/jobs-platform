import loginSignupActionTypes from './loginSignupActionTypes'
import axios from '../../axios/axios'




const loginSignupActions={
    setUserName:(value)=>{
        return{
            type:loginSignupActionTypes.SET_USERNAME,
            payload:value
        }
    },
    setEmail:(value)=>{
        return{
            type:loginSignupActionTypes.SET_EMAIL,
            payload:value
        }
    },
    setIsEmployeer:(value)=>{
        return{
            type:loginSignupActionTypes.SET_IS_EMPLOYEER,
            payload:value
        }
    },
    setCompanyOrProfession:(value)=>{
        return{
            type:loginSignupActionTypes.SET_COMPANY_OR_PROFESSION,
            payload:value
        }
    }, 
       
    setPassword:(value)=>{
        return{
            type:loginSignupActionTypes.SET_PASSWORD,
            payload:value
        }
    }, 
    setConfirmPassword:(value)=>{
        return{
            type:loginSignupActionTypes.SET_CONFIRM_PASSWORD,
            payload:value
        }
    }, 
    setOtp:(value)=>{
        return{
            type:loginSignupActionTypes.SET_OTP,
            payload:value
        }
    },
    postRegister:formData=> async dispatch=>{
        

        const response=await axios.post('/authenticate/local-auth-register',formData)

        return response.data
        
    },
    sendOtp:data=>async dispatch=>{
       const response= await axios.post('/authenticate/sentOtpToMail',data)
       console.log(response.data)

    },
    verifyOtp:data=>async dispatch=>{
        const response=await axios.post('/authenticate/verifyEmail',data)
        return response.data
    },
    login:data=>async dispatch=>{
        const response=await axios.post('/authenticate/local-auth-login',data)
        console.log(response)
        return response.data
    }
}

export default loginSignupActions