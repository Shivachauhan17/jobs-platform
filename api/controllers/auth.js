const User=require('../models/User')
const Otp=require('../models/Otp')
const {genPassword,validPassword}=require('../libs/passwordsUtils')

module.exports={
    localRegister:async(req,res)=>{
        try{
            console.log(req.body)

            if(req.body.email===undefined || req.body.password===undefined || req.body.confirmPassword===undefined)
            {
                return res.status(400).json({data:null,err:"please send the data correctly"})
            }

            const user=await User.findOne({email:req.body.email})
            
            if(user)
            {
                return res.status(403).json({data:null,err:"user already exists"})
            }

            if(req.body.password!==req.body.confirmPassword){
                return res.status(400).json({data:null,err:"password and confirm password are not same"})
            }
            const userName=req.body.email.split('@')[0]

            const newUser=new User({
                userName:userName,
                email:req.body.email,
                isEmployeer:req.body.isEmployeer,
                CompanyOrProfession:req.body.CompanyOrProfession,
                password:req.body.password,
                salt:null
            })

            await newUser.save()

            const newOtp=new Otp({
                email:req.body.email,
                otp:null
            })

            await newOtp.save()

            // const user4Session={
            //     userName:userName,
            //     email:req.body.email,
            //     isEmployeer:req.body.isEmloyeer,
            //     CompanyOrProfession:req.body.CompanyOrProfession,
            // }

            // req.session.user=user4Session

            res.status(200).json({data:
                {
                    email:req.body.email,
                    userName:userName,
                    isEmployeer:req.body.isEmployeer,
                    CompanyOrProfession:req.body.CompanyOrProfession
                },err:null})

        }
        catch(err){
            console.log(err)
            res.json({data:null,err:"some error occured while registering"})
        }
    },

    localLogin:async(req,res)=>{
        if(req.body.email===undefined || req.body.password===undefined)
            {
                return res.status(400).json({data:null,err:"please send the data correctly"})
            }

            const user=User.findOne({email:req.body.email})

            if(!user)
            {
                return res.status(403).json({data:null,err:"user already exists"})
            }

            const user4Session=new User({
                userName:user.userName,
                email:user.email
            })

            res.status(200).json({data:user4Session,err:null})
    },
    sentOtpToMail:async(req,res)=>{
        try{
        await Otp.updateOne({email:req.body.email},{$set:{otp:req.body.otp}})
        res.status(200).json({data:{},err:null})}
        catch(err){
            res.status(500).json({data:null,err:"error occured while sending the otp"})
        }
    },
    verifyMail:async(req,res)=>{
        try{
            const otpmail=await Otp.findOne({email:req.body.email,otp:req.body.otp})
            if(!otpmail)
            {
            return res.status(403).res.json({data:null,err:"one of your otp or email is wrong"})
            }
            res.status(200).json({data:req.body.email,err:null})

        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while verifying the otp"})
        }
    }
}