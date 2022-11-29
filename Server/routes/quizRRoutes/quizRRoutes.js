import { Router } from 'express';
const router = Router();
import quizes from "../../quizRecomendacao.js";

router.get("/quizRecomendacao", (req, res)=>{
    return res.send(quizes)
})

router.get("/quizRecomendacao/:id", (req, res) =>{
    const id = req.params.id;

    const quiz = quizes.filter(item => item.idQuiz == id);
    if(quiz){
        res.send(quiz);
    }
    res.json({msgError: "Houve um erro"});
})


export default router;