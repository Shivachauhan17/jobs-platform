const mongoose=require('mongoose')

const ScheduleSchema=mongoose.Schema({
    email:{
        type:String,
        default:null,
        unique:true
    },
    applicantEmail:{
        type:String,
        default:null
    },
    time:{
        type:Date,
        default:null}
});

module.exports=mongoose.model('Schedule',ScheduleSchema)