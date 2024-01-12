const jobRouter=require('express').Router()
const jobcontroller=require('../controllers/job')

jobRouter.post('/addAJob',jobcontroller.addAJob)
jobRouter.get('/getMyJobs',jobcontroller.getMyJobs)
jobRouter.post('/apllyToJob',jobcontroller.apllyToJob)
jobRouter.post('/saveAJob',jobcontroller.saveAJob)
jobRouter.post('/getApplicants',jobcontroller.getApplicants)
jobRouter.post('/sheduleAApplicant',jobcontroller.sheduleAApplicant)
jobRouter.post('/mySheduledApplicants',jobcontroller.mySheduledApplicants)

module.exports=jobRouter