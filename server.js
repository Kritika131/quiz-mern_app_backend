import express, { application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'

const app = express()


// app middleware 
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()

// application port 
const port = process.env.PORT || 8080

// routes 
app.get('/',(req,res)=>{
  res.json("Get Request")
})

app.listen(port,()=>{
  console.log("server running on port " + port);
})