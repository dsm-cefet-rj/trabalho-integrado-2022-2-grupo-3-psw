const {Router} = require("express");
const router = Router();
const quizes = require ("../../quizRecomendacao.js");

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


module.exports =  router;