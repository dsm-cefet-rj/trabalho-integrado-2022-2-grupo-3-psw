const User = require("../../models/User");
const userRepository = require ('./usersRepository');

const registerUser = async (user) => {
    if (!user.nome || !user.email || !user.password) {
        return { message: "Todos os campos devem ser preenchidos para realizar o registro!", success: false}
    }

    const duplicatedEmail = await userRepository.validateEmail(user.email);

    if (duplicatedEmail) {
        return { message: "Esse email já está em uso!", success: false}
    }

    const registeredUser = await userRepository.registerUser(user);

    return {
        message: "Usuário cadastrado com sucesso!",
        registeredUser,
        success: true
    }
}

 async function authUser (email, password) {
    let usuarioExistente = await userRepository.authUser(email, password);

    if (usuarioExistente){
        return {message: "Usuário autenticado!", success: true};
    }
    
    return { message: "Credenciais inválidas!", success: false}
}

module.exports = {
    registerUser,
    authUser
};


