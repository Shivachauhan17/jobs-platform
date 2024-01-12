const mongoose=require('mongoose')

const jobSchema=mongoose.Schema({
    role:{
        type:String,
        default:null,
        required:true
    },
    companyName:{
        type:String,
        default:null,
        required:true},
    location:{
        type:String,
        default:null,
        required:true},
    skills:{
        type:Array,
        default:null},
    pay:{
        type:Number,
        default:null},
    officeTiming:{
        type:Array,
        default:null,
        required:true
    },
    perks:{
        type:Array,
        default:null
    },
    contactType:{
        type:String,
        default:null,
        required:true
    },
    contact:{
        type:String,
        default:null,
        required:true
    }
});

module.exports=mongoose.model('Job',jobSchema)