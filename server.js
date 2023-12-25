import express, { application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './routes/route.js'
import connect from './model/connection.js'
const app = express()


// app middleware 
app.use(morgan('tiny'))
app.use(cors())  
app.use(express.json())
config()

// application port 
const port = process.env.PORT || 8080


// routes 

app.use('/api',router) 
app.get('/',(req,res)=>{ 
  res.json("Get Request")
})

// start server only have a valid connection 
connect().then(()=>{
  try{
    app.listen(port,()=>{
      console.log("server running on port " + port);
    })

  } catch(err){
    console.log("cannot connect to the server");
  }  
    
}).catch(err=>{
  console.log("Invalid Database Connection"); 
})
