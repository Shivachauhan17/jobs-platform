const mongoose = require('mongoose')
const GoogleStrategy =require('passport-google-oauth20').Strategy;
const Ouser=require('../models/Ouser')
require('dotenv').config('../.env')
const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_SECRET_ID

module.exports = function (passport) {

    passport.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: ""
    },
    async function(req,accessToken, refreshToken, profile, cb) {
      const username=profile._json.email.split('@')[0]
      const defaultUser={
        fullName:profile.displayName,
        email:profile._json.email,
        googleId:profile.id,
        picture:profile._json.picture,
        userName:username
      }
  try{
    const user=await Ouser.findOneAndUpdate({googleId:profile.id},defaultUser,{new:true,upsert:true})
     if(!user){
      return cb(null, false)
     }
     else{
      return cb(null,user)
     }
    }
    catch(err){
      return cb(err,false);
    }
    }
  ));


      passport.serializeUser((user, done) => {
        done(null,user._id);
  })

  passport.deserializeUser(async (id, done) => {
    console.log(userInfo)
    try {
        const user=await User.findOne({_id:id})
        done(null,user)
    } catch (err) {
      done(err, null);
    }
  });
    
    }
    