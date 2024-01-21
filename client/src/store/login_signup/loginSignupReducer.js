import loginSignupActionTypes from './loginSignupActionTypes'

const initialState={
    userName:"",
    email:"",
    isEmployeer:"",
    ComapanyOrProfession:"",
    password:"",
    confirmPassword:"",
    otp:""
}

const loginSignupReducer=(state=initialState,action)=>{
    switch(action.type){

        case loginSignupActionTypes.SET_USERNAME:
            return{
                ...state,
                userName:action.payload
            }

        case loginSignupActionTypes.SET_EMAIL:
            return{
                ...state,
                email:action.payload
            }
        case loginSignupActionTypes.SET_IS_EMPLOYEER:
            return{
                ...state,
                isEmployeer:action.payload
            }
        case loginSignupActionTypes.SET_COMPANY_OR_PROFESSION:
            return{
                ...state,
                ComapanyOrProfession:action.payload
            }
        case loginSignupActionTypes.SET_PASSWORD:
            return{
                ...state,
                password:action.payload
            }
            
        case loginSignupActionTypes.SET_CONFIRM_PASSWORD:
            return{
                ...state,
                confirmPassword:action.payload
            }
        case loginSignupActionTypes.SET_OTP:
            return{
                ...state,
                otp:action.payload
            }

        default:
            return state
    }
}

export default loginSignupReducer