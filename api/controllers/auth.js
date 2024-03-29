const User=require('../models/User')
const Otp=require('../models/Otp')
const {genPassword,validPassword}=require('../libs/passwordsUtils')
const {sendmail}=require('../libs/email')

module.exports={
    localRegister:async(req,res)=>{
        try{
            console.log(req.body)

            if(req.body.email===undefined || req.body.password===undefined || req.body.confirmPassword===undefined)
            {
                return res.status(200).json({data:null,err:"please send the data correctly"})
            }

            const user=await User.findOne({email:req.body.email})
            
            if(user)
            {
                return res.status(200).json({data:null,err:"user already exists"})
            }

            if(req.body.password!==req.body.confirmPassword){
                return res.status(200).json({data:null,err:"password and confirm password are not same"})
            }
            const userName=req.body.email.split('@')[0]

            // const newUser=new User({
            //     userName:userName,
            //     email:req.body.email,
            //     isEmployeer:req.body.isEmployeer,
            //     CompanyOrProfession:req.body.CompanyOrProfession,
            //     password:req.body.password,
            //     salt:null
            // })

            // await newUser.save()

            const otp=await Otp.findOne({email:req.body.email})
            if(!otp){
                const newOtp=new Otp({
                    email:req.body.email,
                    otp:null
                })

                await newOtp.save()
            }
            else{
                return res.status(200).json({data:null,err:"already sent otp"})
            }
            

            

            res.status(200).json({data:
                {
                    email:req.body.email,
                    userName:userName,
                    isEmployeer:req.body.isEmployeer,
                    CompanyOrProfession:req.body.CompanyOrProfession,
                    password:req.body.password
                },err:null})

        }
        catch(err){
            console.log(err)
            res.json({data:null,err:"some error occured while registering"})
        }
    },

    localLogin:async(req,res,next)=>{
        try{
            
            if(req.user===undefined || req.user.email===undefined){
                return res.status(200).json({data:null,err:"unsuccessfull credentials are wrong"})
            }
            const user=req.user
            console.log(user.email)
            const user4Session={    
                email:user.email,
                userName:user.email.split('@')[0],
                isEmployeer:user.isEmployeer,
                CompanyOrProfession:user.CompanyOrProfession
            }
            return res.status(200).json({data:user4Session,err:null})
        }
        catch(err){
            console.log(err)
            return res.status(500).json({data:null,err:"error occured while logging in"})
        }
        
    },
    sentOtpToMail:async(req,res)=>{
        try{
            const otp=await Otp.findOne({email:req.body.email})
            if(!otp){
                return res.status(200).json({data:null,err:"register before verifying the mail"})
            }
            const random4DigitNumber = Math.floor(1000 + Math.random() * 9000).toString();
            sendmail(req.body.email,random4DigitNumber)
            await Otp.findOneAndUpdate({email:req.body.email},{$set:{otp:random4DigitNumber}})
        
            res.status(200).json({data:{email:req.body.email},err:null})}
        catch(err){
            res.status(500).json({data:null,err:"error occured while sending the otp"})
        }
    },
    verifyMail:async(req,res)=>{
        try{
            const otp=await Otp.findOne({email:req.body.email,otp:req.body.otp})
            if(!otp)
            {
            return res.status(200).json({data:null,err:"one of your otp or email is wrong"})
            }
            const {salt,hash}=genPassword(req.body.password)
            const newUser=new User({
                userName:req.body.email.split('@')[0],
                email:req.body.email,
                isEmployeer:req.body.isEmployeer==="1"?true:false,
                CompanyOrProfession:req.body.CompanyOrProfession,
                password:hash,
                salt:salt
            })

            await newUser.save()
            const user4Session={
                userName:req.body.email.split('@')[0],
                email:req.body.email,
                isEmployeer:req.body.isEmployeer,
                CompanyOrProfession:req.body.CompanyOrProfession,
            }

            
            req.session.user=user4Session
            req.session.save(err=>{
                if(err){
                return res.status(500).json({data:null,err:"some error occured while verifying the otp"})
                }
                return  res.status(200).json({data:user4Session,err:null})
            })
        

            
           

        }
        catch(err){
            console.log(err)
            res.status(500).json({data:null,err:"some error occured while verifying the otp"})
        }
    },
    localLoginFailure:(req,res,next)=>{
        return res.status(200).json({data:null,err:"credentials are wrong"})
    }
}