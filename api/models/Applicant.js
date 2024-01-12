const mongoose=require('mongoose')

const ApplicantSchema=mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    jobId:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Applicant',ApplicantSchema)