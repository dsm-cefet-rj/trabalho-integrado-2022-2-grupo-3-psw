var express = require('express');
var router = express.Router();

router.get("/quizRecomendacao", (req, res)=>{
    return res.send("todos os quizes")
})

module.exports = router;