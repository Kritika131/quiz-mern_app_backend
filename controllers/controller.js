import Questions from "../model/questionSchema.js"
import Results from "../model/resultSchema.js"
import questions, {answers} from '../model/data.js'

// get all questions 
export const getQuestions=async(req,res)=>{
  try{
    const questions = await Questions.find()
    res.json(questions)
  } catch(err){
    res.json({err})
  }

}

// insert all questions 
export  const insertQuestions=async(req,res)=>{
  try{
     Questions.insertMany({questions:questions , answers:answers},(err,data)=>{
      if(!err){
        res.json({msg:"Data Saved Successfully...!"})
      }
     })
  }catch(err){

    res.json(err)
  }
}

// Delete all Questions 

export const deleteQuestions =async(req,res)=>{
  try{
    await Questions.deleteMany()
    res.json({msg:"Questions deleted successfully...!"})
  } catch(err){
    res.json({err})
  }
}

// get all result 
export const getResult = async(req,res)=>{
  try{
    const result = await Results.find()
    res.json(result)
  } catch(err){
    res.json({err})
  }
}

// /post all result 
export const storeResult=async(req,res)=>{
  try{
    const {username,result,attempts,points,achived}=req.body;
    if(!username && !result) throw new Error('Data Not Provided...!')
    Results.create({username,result,attempts,points,achived},(err,data)=>{
      if(!err){
        res.json({msg:"Result Saved Successfully....!"})
      }
    })

  } catch(err){
    res.json({err})
  }
}
// /dellete all result 
export const deleteResult=async(req,res)=>{
 try{
  await Results.deleteMany();
  res.json({msg:"Result Deleted Successfully...!"})

 } catch(err){
  res.json(err)
 }
}