import mongoose from "mongoose"

const uri = "mongodb+srv://admin:admin@123@cluster0.7cx7isj.mongodb.net/?retryWrites=true&w=majority";

const connect = async ()=>{
  try{   
    mongoose.connect(process.env.MONGODB_URL)
   console.log("db connected");    
 
  } catch(err){
    console.log("error while connecting to database");
  }
}

export default connect