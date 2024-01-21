const authRouter=require('express').Router()
const autheController=require('../controllers/auth')
const passport=require('passport')


authRouter.post('/local-auth-register',autheController.localRegister)
authRouter.post('/local-auth-login',passport.authenticate('local',{successRedirect:'/authenticate/local-auth-login-successful',failureRedirect:'/authenticate/local-auth-login-failure'}))
authRouter.get('/local-auth-login-successful',autheController.localLogin)
authRouter.get('/local-auth-login-failure',autheController.localLoginFailure)
authRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] })
    );
authRouter.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: 'https://social-network-webaap.vercel.app/loginFailure',successRedirect:'https://social-network-webaap.vercel.app/loginSuccessful' })
  );

authRouter.post('/sentOtpToMail',autheController.sentOtpToMail)
authRouter.post('/verifyEmail',autheController.verifyMail)
module.exports=authRouter;