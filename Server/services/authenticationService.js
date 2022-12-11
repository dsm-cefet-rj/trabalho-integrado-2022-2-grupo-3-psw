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
    console.log(authData)
    const authenticated = bcrypt.compare(password, authData[0].hashedPassword)

    return {message: "Usuário existente", success: authenticated}
}

module.exports = {hashPassword, authUser}