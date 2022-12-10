const {Router} = require("express");
const router = Router();
const quizesS = require("../../quizSatisfacao.js");

router.get("/quizSatisfacao", (req, res)=>{
    return res.send(quizesS);
})

router.get("/quizSatisfacao/:id", (req, res)=>{
    const id = req.params.id;
    const quiz = quizesS.filter(item => item.idQuiz == id);
    
    if(quiz){
        res.send(quiz);
    }
    res.json({msgError: "Ocorreu um erro"});
})

module.exports = router;