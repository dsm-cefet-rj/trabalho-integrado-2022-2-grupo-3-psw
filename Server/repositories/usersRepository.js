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

const addToCart = async (userId, product) => await User.findOneAndUpdate(
    {_id: userId, "cartItens.product._id": {$nin: [product._id]}},
    {$push: {cartItens: {product}}}
)

const increaseItemQuantity = async (userId, product) => {
    let productQtd = product.quantidade + 1;

    await User.findOneAndUpdate(
        {_id: userId, "cartItens.product._id": {$eq: [product._id]}, "cartItens.product.quantidade": {$gte: [product.quantidade]}},
        {$: cartItens.product.quantidade = productQtd}  
    )
}

const decreaseItemQuantity = async (userId, product) => {
    let productQtd = product.quantidade - 1;

    await User.findOneAndUpdate(
        {_id: userId, "cartItens.product._id": {$eq: [product._id]}, "cartItens.product.quantidade":{$lte: [product.quantidade]}},
        {$: cartItens.product.quantidade = productQtd}  
    )
}

const removeFromCart = async (userId, product) => await User.findOneAndUpdate(
    {_id: userId} ,
    {$pull: {cartItens: {product}}}
)

module.exports = {
    registerUser,
    validateEmail,
    getAuthData,
    addToFavorites,
    removeToFavorites,
    getUsers,
    addToCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart
};
