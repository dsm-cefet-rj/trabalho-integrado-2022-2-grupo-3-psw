const { default: mongoose } = require("mongoose");
const User = require("../models/User");

const registerUser = async (user) => await User.create(user);

const validateEmail = async (email) => await User.exists({email: email})

const getAuthData = async (email) =>  {
    return await User.findOne({email: email})
}

const addToFavorites = async (idUser, product) => await User.findOneAndUpdate(
    {_id: idUser, "favorites.product._id": {$nin: [product._id]}} ,
    {$push: {favorites: {product, add_at: new Date()}}}
)

const removeToFavorites = async (idUser, product) => await User.findOneAndUpdate(
    {_id: idUser} ,
    {$pull: {favorites: {product}}}
)


const getUsers = async () => await User.find();

module.exports = {
    registerUser,
    validateEmail,
    getAuthData,
    addToFavorites,
    removeToFavorites,
    getUsers
};
