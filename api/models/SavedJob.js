const mongoose=require('mongoose')

const SavedJobSchema=mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    jobId:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('SavedJob',SavedJobSchema)