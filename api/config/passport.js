const mongoose = require('mongoose')
const GoogleStrategy =require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy
const User=require('../models/User')
const Ouser=require('../models/Ouser')
require('dotenv').config('../.env')
const {validPassword}=require('../libs/passwordsUtils')

const GOOGLE_CLIENT_ID=process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET=process.env.GOOGLE_SECRET_ID

module.exports = function (passport) {

  //   passport.use(new GoogleStrategy({
  //     clientID: GOOGLE_CLIENT_ID,
  //     clientSecret: GOOGLE_CLIENT_SECRET,
  //     callbackURL: ""
  //   },
  //   async function(req,accessToken, refreshToken, profile, cb) {
  //     const username=profile._json.email.split('@')[0]
  //     const defaultUser={
  //       fullName:profile.displayName,
  //       email:profile._json.email,
  //       googleId:profile.id,
  //       picture:profile._json.picture,
  //       userName:username
  //     }
  // try{
  //   const user=await Ouser.findOneAndUpdate({googleId:profile.id},defaultUser,{new:true,upsert:true})
  //    if(!user){
  //     return cb(null, false)
  //    }
  //    else{
  //     return cb(null,user)
  //    }
  //   }
  //   catch(err){
  //     return cb(err,false);
  //   }
  //   }
  // ));

  passport.use(new LocalStrategy({usernameField:'email'},async(email,password,done)=>{
  
    await User.findOne({email:email})
      .then((user) => {
        
        if (!user) { return done(null, false) }
        
        const isValid = validPassword(password, user.password, user.salt);
        if (isValid) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    })
    .catch((err) => {   
        done(err);
    });


  }))


      passport.serializeUser((user, done) => {
        
        done(null,user._id);
  })

  passport.deserializeUser(async (id, done) => {
    try {
        const user=await User.findOne({_id:id})
        done(null,user)
    } catch (err) {
      done(err, null);
    }
  });
    
    }
    