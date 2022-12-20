const { default: mongoose } = require("mongoose");
const User = require("../models/User");

const registerUser = async (user) => await User.create(user);

const validateEmail = async (email) => await User.exists({ email: email })

const getAuthData = async (email) => {
    return await User.findOne({ email: email })
}

const addToFavorites = async (idUser, product) => await User.findOneAndUpdate(
    { _id: idUser, "favorites.product._id": { $nin: [product._id] } },
    { $push: { favorites: { product, add_at: new Date() } } }
)

const removeToFavorites = async (idUser, product) => await User.findOneAndUpdate(
    { _id: idUser },
    { $pull: { favorites: { product } } }
)

const getUsers = async () => await User.find();

const addToCart = async (userId, product) => await User.findOneAndUpdate(
    { _id: userId, "cartItens.product._id": { $nin: [product._id] } },
    { $push: { cartItens: { product, productQtd: 0} } }
)

const removeFromCart = async (userId, product) => await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { cartItens: { product } } }
)

const increaseItemQuantity = async (userId, productId) => {
    const user = await User.findById(userId);
    const product = user.cartItens.filter(product => product.product._id.equals(productId));
    const product_qtd = product[0].productQtd;

    return await User.findOneAndUpdate(
        { _id: userId, 'cartItens.product._id': product[0].product._id},
        { $set: {'cartItens.$.productQtd': product_qtd + 1}},
    )
}

const decreaseItemQuantity = async (userId, productId) => {
    const user = await User.findById(userId);
    const product = user.cartItens.filter(product => product.product._id.equals(productId));
    const product_qtd = product[0].productQtd;
    if (product_qtd == 0 ){
        return
    }

    return await User.findOneAndUpdate(
        { _id: userId, 'cartItens.product._id': product[0].product._id},
        { $set: {'cartItens.$.productQtd': product_qtd - 1}},
    )
}

const addToOrderList = async (userId, product, productQtd, orderDate) => await User.findOneAndUpdate(
    { _id: userId },
    { $push: { ordersList: { product, productQtd: productQtd ,orderDate: orderDate} } }
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
    removeFromCart,
    addToOrderList
};
