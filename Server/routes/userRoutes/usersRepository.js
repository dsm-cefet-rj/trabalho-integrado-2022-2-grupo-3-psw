// const fs = require('fs');
const userService = require ('./userService');

const registerUser = async (req, res) => {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
        res.status(400).send({ message: "Todos os campos devem ser preenchidos para realizar o registro!"});
    }

    const user = await userService.registerUser(req.body)

    if (!user){
        return res.status(400).send({message: "Erro na criação de usuário!"})
    }

    res.status(201).send({
        message: "Usuário cadastrado com sucesso!",
        user: {
            id: user._id,
            nome: user.nome,
            email: user.email,
            password: user.password
        },
    });
};

const authUser = async (req, res) => {
    const { email, password } = req.body;

    const auth = await userService.find();

    if (auth) {
        return res.status(400).send({ message: "Credenciais inválidas!"});
    }

    res.status(201).send({ 
        message: "Usuário autenticado!",
        user: {
            id: user._id,
            email: user.email,
            password: user.password
        }
    });

}

module.exports = { registerUser, authUser};

// const usuariosFileName = 'users.json'

// async function salvarUsuario(user) {
//     let usuarios = await getUsuarios()
//     usuarios.push(user);
//     await fsa.writeFile(usuariosFileName, JSON.stringify(usuarios));
// }

// async function getUsuarios() {

//     if (!fs.existsSync(usuariosFileName)) {
//         await fsa.writeFile(usuariosFileName, JSON.stringify([]));
//         return [];
//     }
//     let usersFile = await fsa.readFile(usuariosFileName);
//         let usuarios = JSON.parse(usersFile);
//         return usuarios;
// }



// module.exports = salvarUsuario;
// module.exports = getUsuarios;