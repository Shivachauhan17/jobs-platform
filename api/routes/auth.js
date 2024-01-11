const authRouter=require('express').Router()
const autheController=require('../controllers/auth')
const passport=require('passport')


authRouter.post('/local-auth-register',autheController.localRegister)
authRouter.post('/local-auth-login',autheController.localLogin)
authRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile','email'] })
    );
authRouter.get('/auth/google/callback', 
  passport.authenticate('google', {failureRedirect: 'https://social-network-webaap.vercel.app/loginFailure',successRedirect:'https://social-network-webaap.vercel.app/loginSuccessful' })
  );

authRouter.post('/sentOtpToMail',autheController.sentOtpToMail)
authRouter.post('/verifyEmail',autheController.verifyMail)
module.exports=authRouter;