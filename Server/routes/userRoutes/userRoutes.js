import { Router } from 'express';
import { registrarUsuario, autenticarUsuario } from './userService.js';

var router = Router();

router.post("/", async (req, res) => {
    let usuario = req.body;
    let resultado = await registrarUsuario(usuario);

    return res.json({msg: resultado});
})

router.post("/auth", async (req, res) => {
    let usuario = req.body;
    let resultado = await autenticarUsuario(usuario);

    return res.json({msg: resultado});
})


export default router;