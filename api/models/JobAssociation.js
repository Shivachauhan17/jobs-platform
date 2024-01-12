const mongoose=require('mongoose')

const jobAssociationSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    isEmployeer:{
        type:Boolean,
        required:true},
    jobs:{
        type:Array,
        default:null}
});

module.exports=mongoose.model('JobAssociation',jobAssociationSchema)