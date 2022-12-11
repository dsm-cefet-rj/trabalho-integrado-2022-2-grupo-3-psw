const User = require("../../models/User");


const registerUser = async (user) => await User.create(user);

const validateEmail = async (email) => await User.exists({email: email})

const authUser = async (email, senha) => {
    const user = await User.find({email: email});
    return user.password == senha 
}

module.exports = {
    registerUser,
    validateEmail,
    authUser
};