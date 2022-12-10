const { salvarUsuario, getUsuarios } = require("./usersRepository.js");

async function registrarUsuario (user) {
    let usuarios = await getUsuarios()
    let usuarioRepetido = usuarios.some(u => u.email == user.email);

    if (usuarioRepetido){
        return "Esse email já está em uso!";
    }
    await salvarUsuario(user);
    return "Usuário cadastrado com sucesso!";
}

 async function autenticarUsuario (user) {
    let usuarios = await getUsuarios()
    let usuarioExistente = usuarios.some(u => u.email == user.email && u.password == user.password);

    if (usuarioExistente){
        return "Usuário autenticado!";
    }
    
    return "Credenciais inválidas!";
}

module.exports = registrarUsuario;
module.exports = autenticarUsuario;