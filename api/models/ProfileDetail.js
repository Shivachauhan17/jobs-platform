const mongoose=require('mongoose')

const ProfileDetailSchema=mongoose.Schema({
    email:{
        type:String,
        default:null,
        unique:true
    },
    role:{
        type:String,
        default:null
    },
    companyName:{
        type:String,
        default:null},
    location:{
        type:String,
        default:null},
    skills:{
        type:Array,
        default:null},
    experience:{
        type:Array,
        default:null
    },
    projects:{
        type:Array,
        default:null
    }
    ,
    contactType:{
        type:String,
        default:null
    },
    contact:{
        type:String,
        default:null
    }
});

module.exports=mongoose.model('ProfileDetail',ProfileDetailSchema)