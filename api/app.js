const express=require('express')
const app=express()
const cors=require('cors')
const passport=require('passport')
const session=require('express-session')
const MongoStore=require('connect-mongo')
const authRoutes=require('./routes/auth')
const jobRoute=require('./routes/job')
const morgan=require('morgan')

app.use(morgan('dev'));
const connectDB=require('./config/database')
require("dotenv").config();


const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, // Allow cookies to be sent with requests
};
connectDB()
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("trust proxy", 1);


  const sessionMiddleWare=session({
      secret: 'keyboard cat',
      resave: false,//don't save session is unmodified
      saveUninitialized:true,//don't create session untill something is stores
      store: MongoStore.create({
        mongoUrl: process.env.DB_STRING,
        collection: 'sessions'
      }),
      // proxy:true,
      cookie:{
        maxAge:1000*60*60*24,
        // secure: true,
        // sameSite: "none" 
      }    
  })
  
app.use(sessionMiddleWare)
require('./config/passport')(passport)

app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  console.log("user in session:", req.user);
  next();
});


app.use('/authenticate',authRoutes)
app.use('/jobAction',jobRoute)
app.get('/',(req,res,next)=>{
  res.send("hello")
})



app.listen(process.env.SERVER_PORT, () => {
  console.log("Server is running, you better catch it!");
});