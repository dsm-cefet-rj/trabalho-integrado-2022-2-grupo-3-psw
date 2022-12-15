const bcrypt = require('bcrypt');
const userRepository = require('../repositories/usersRepository');
const jwt = require('jsonwebtoken');

const secret = "SIAMFGIESJdhfG8017513U2MsgfdfhJ3IJR0WEIFWEnbv";

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

    if (!authenticated){
        console.log(authenticated)
        return {message: "Credenciais inválidas!", success: false}
    }
    
    try {
        const token = jwt.sign({
            id: authData._id,
            nome: authData.nome,
            email: authData.email
        }, secret,)

        return {message: "Usuário autenticado!", success: true, email: authData.email, nome: authData.nome ,token}
    }

    catch (err) {
        return {message: "Token inválido!", success: false}

    }

}

module.exports = {hashPassword, authUser}