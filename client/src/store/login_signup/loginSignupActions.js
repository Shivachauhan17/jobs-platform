import loginSignupActionTypes from './loginSignupActionTypes'

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
    }
}

export default loginSignupActions