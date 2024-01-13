import {combineReducers} from "redux";
import loginSignupReducer from './login_signup/loginSignupReducer';


const rootReducer=combineReducers({
    logSign:loginSignupReducer
})

export default rootReducer;