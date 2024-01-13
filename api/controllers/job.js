const Job=require('../models/Job')
const JobAssociation=require('../models/JobAssociation')
const SavedJob=require('../models/SavedJob')
const Applicant=require('../models/Applicant')
const ProfileDetail=require('../models/ProfileDetail')
const Schedule=require('../models/Schedule')
const mongoose=require('mongoose')


module.exports={
    addAJob:async(req,res)=>{

        try{

        
            const newJob=new Job({
                role:req.body.role,
                companyName:req.body.companyName,
                location:req.body.location,
                skills:req.body.skills,
                pay:req.body.pay,
                officeTiming:req.body.officeTiming,
                perks:req.body.perks,
                contactType:req.body.contactType,
                contact:req.body.contact
            })

            const savedJob= await newJob.save()

            const newJobAssociation=new JobAssociation({
                // email:req.session.email,
                email:"shivanbd2019@gmail.com",
                isEmployeer:true,
                jobs:[savedJob._id.toString()]
            })
            let data=null
            // const associated=await JobAssociation.findOne({email:req.session.email})
            const associated=await JobAssociation.findOne({email:"shivanbd2019@gmail.com"})
            if(!associated){
                data=await JobAssociation.create(newJobAssociation)
            }
            else{
                data=await JobAssociation.updateOne({email:req.session.email},{$push:{jobs:savedJob._id.toString()}})
            }
            
            res.status(200).json({data:data,err:null})
        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while adding the job post"})
        }
    },
    getMyJobs:async(req,res)=>{
        try{

            // const jobsAssociation=await JobAssociation.findOne({email:req.session.email})
            const jobsAssociation=await JobAssociation.findOne({email:"shivanbd2019@gmail.com"})
            const jobs=jobsAssociation.jobs

            let data=[]
            for(let i=0;i<jobs.length;i++){
                const id=new mongoose.Types.ObjectId(jobs[i])
                let job=await Job.findOne({_id:id})
                job._id=job._id.toString()
                data.push(job)
            }

            res.status(200).json({data:data,err:null})

        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while fetching the jobs"})
        }
    },
    saveAJob:async(req,res)=>{
        try{

            const newSavedJob=new SavedJob({
                // email:req.session.email,
                email:"shivanbd2019@gmail.com",
                jobId:req.body.jobId
            })

            await newSavedJob.save()

            res.status(200).json({data:newSavedJob,err:null})

        }
        catch(err){
            console.log(err)
            res.status(500).json({data:null,err:"some error occured while saving job to collecction"})
        }
    },
    apllyToJob:async(req,res)=>{
        try{

            const newApplicant=new Applicant({
                // email:req.session.email,
                email:"shivanbd2020@gmail.com",
                jobId:req.body.jobId
            })

            await newApplicant.save()

            const newJobAssociation=new JobAssociation({
                // email:req.session.email,
                email:"shivanbd2020@gmail.com",
                isEmployeer:false,
                jobs:[req.body.jobId]
            })
            let data=null
            // const associated=await JobAssociation.findOne({email:req.session.email})
            const associated=await JobAssociation.findOne({email:"shivanbd2020@gmail.com"})
            if(!associated){
                data=await JobAssociation.create(newJobAssociation)
            }
            else{
                // data=await JobAssociation.updateOne({email:req.session.email},{$push:{jobs:req.body.jobId}})
                data=await JobAssociation.updateOne({email:"shivanbd2020@gmail.com"},{$push:{jobs:req.body.jobId}})
            }
            
            res.status(200).json({data:data,err:null})

        }
        catch(err){
            console.log(err)
            res.status(500).json({data:null,err:"some error occured while applying to job"})
        }
    },
    getApplicants:async(req,res)=>{
        try{
            const applicants=await Applicant.find({jobId:req.body.jobId})

            let applicantsInfo=[]

            for(let i=0;i<applicants.length;i++){
                const email=applicants[i].email.tostring()
                let applicantDetail=await ProfileDetail.findOne({email:email})
                applicantDetail._id=applicantDetail._id.toString()
                applicantsInfo.push(applicantDetail) 
            }


            res.status(200).json({data:applicantDetail,err:null})
        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while fething applicants"})
        }
    },
    sheduleAApplicant:async(req,res)=>{
        try{
            const newShedule=new Schedule({
                email:req.session.email,
                applicantEmail:req.body.applicantEmail,
                time:req.body.time
            })
    
            await newShedule.save()
            res.status(200).json({data:newShedule,err:null})
        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while scheduling "})
        }
    },
    mySheduledApplicants:async(req,res)=>{
        try{
            const scheduled=await Schedule.find({email:req.session.email})

            let scheduledInfo=[]
            for(let i=0;i<scheduled.length;i++){
                let profile=await ProfileDetail.findOne({email:scheduled[i].applicantEmail})
                profile._id=profile._id.toString()
                profile.time=scheduled[i].time
                scheduledInfo.push(profile)
            }

            res.status(200).json({data:scheduledInfo,err:null})
        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while fetching sheduled applicants "})
        }
    },
    deleteAJob:async(req,res)=>{
        try{
            const id=new mongoose.Types.ObjectId(req.body.jobId)
            await Job.deleteOne({_id:id})
            await Applicant.deleteMany({jobId:req.body.jobId})
            await SavedJob.deleteMany({jobId:req.body.jobId})

            await JobAssociation.updateMany(
                {jobs:{$in:[req.body.jobId]}},
                {$pull:{jobs:req.body.jobId}}
                )

            res.status(200).json({data:req.body.jobId,err:null})

        }
        catch(err){
            res.status(500).json({data:null,err:"some error occured while deleting the job"})
        }
    }
}