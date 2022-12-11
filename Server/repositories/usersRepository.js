const { default: mongoose } = require("mongoose");
const User = require("../models/User");

const registerUser = async (user) => await User.create(user);

const validateEmail = async (email) => await User.exists({email: email})

const getAuthData = async (email) =>  {
    return await User.findOne({email: email})
}

module.exports = {
    registerUser,
    validateEmail,
    getAuthData
};
