const { Router } = require('express');
// const { registrarUsuario, autenticarUsuario } = require('./userService.js');
const { registerUser, authUser } = require('./usersRepository');

var router = Router();

router.post("/", registerUser)
router.get("/auth", authUser)
// async (req, res) => {
//     let usuario = req.body;
//     let resultado = await registrarUsuario(usuario);

//     return res.json({msg: resultado});
// })

// router.post("/auth", async (req, res) => {
//     let usuario = req.body;
//     let resultado = await autenticarUsuario(usuario);

//     return res.json({msg: resultado});
// })


module.exports = router;