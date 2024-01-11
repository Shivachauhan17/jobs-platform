const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName:{type:String,unique:true},
    email: { type: String, unique: true },
    isEmployeer:{type:Boolean,required:true},
    CompanyOrProfession:{type:String,required:true},
    password: String,
    salt:String   
})


module.exports = mongoose.model('User', UserSchema)