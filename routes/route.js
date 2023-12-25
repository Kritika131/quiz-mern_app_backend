import { Router } from "express";
import { deleteQuestions, deleteResult, getQuestions, getResult, insertQuestions, storeResult } from "../controllers/controller.js";
const router = Router(); 

// Questions Routes 

// router
// .get('/questions', getQuestions)
// .post('/questions', insertQuestions)

router.route('/questions')
    .get(getQuestions)
    .post(insertQuestions)
    .delete(deleteQuestions)

router.route('/result')
    .get(getResult)
    .post(storeResult)    
    .delete(deleteResult)

export default router;