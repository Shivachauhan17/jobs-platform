const mongoose=require('mongoose')

const OtpSchema=mongoose.Schema({
    otp:{
        type:String,
        default:null
    },
    email:{
        type:String,
        default:null},
    
});

module.exports=mongoose.model('Otp',OtpSchema)