import loginSignupActionTypes from './loginSignupActionTypes'
import axios from '../../axios/axios'
import { SMTPClient } from 'emailjs';
import dotenv from 'dotenv'
import path from 'path'
import { TextEncoder } from 'util';

dotenv.config({path:'../../../.env'})




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
    sendOtp:(receiver)=>{
        const client = new SMTPClient({
            user: "shivanbd2020@gmailcom",
            password: "WnWRcLak25%jxi!",
            host: 'smtp.gmail.com',
            ssl: true,
        });
        const otp = Math.floor(1000 + Math.random() * 9000).toString();

        console.log(random4DigitNumber);
        client.send(
            {
                text: otp,
                from: "shivanbd2020@gmailcom",
                to: receiver,
                cc: '',
                subject: 'Registration on Career Forge',
            },
            (err, message) => {
                console.log(err || message);
            }
        );
    }
}

export default loginSignupActions