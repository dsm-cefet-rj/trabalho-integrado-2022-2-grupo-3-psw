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

        return {message: "Usuário autenticado!", success: true, user: {email: authData.email, nome: authData.nome, id: authData._id} ,token}
    }

    catch (err) {
        return {message: "Token inválido!", success: false}

    }

}

const validateToken = (req, res) => {
    const token = req.params.token;

    try{
        jwt.verify(token, secret, async (error, decoded) => {
            if(error){
                return res.status(400).send({message: "Token inválido para validação"})
            }
            const user = await userRepository.getAuthData(decoded.email)
            return res.status(200).send({user: 
                {nome: user.nome, email: user.email, id: user._id, favorites: user.favorites, cartItens: user.cartItens, ordersList: user.ordersList}
            })
        })
    }catch (err) {
        console.log(err.message)
        return res.status(400).send({ message: "Não foi possível realizar a validação." });
    }
}

module.exports = {hashPassword, authUser,validateToken}