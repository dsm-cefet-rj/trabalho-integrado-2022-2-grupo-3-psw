const bcrypt = require('bcrypt');
const userRepository = require('../repositories/usersRepository');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);

    return hash;
}

const authUser = async (email, password) => {
    const authData = await userRepository.getAuthData(email)
    if (!authData){
        return {message: "Usuário não encontrado", success: false}
    }
    const authenticated = await bcrypt.compare(password, authData.hashedPassword)

    if (authenticated){
        console.log(authenticated)
        return {message: "Usuário autenticado!", success: true, email: authData.email, nome: authData.nome}
    }

    return {message: "Credenciais inválidas!", success: false}
}

module.exports = {hashPassword, authUser}