var express = require('express');
var router = express.Router();

router.get("/user", (req, res) => {
    return res.send("Usuários");
})

module.exports = router;