const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    favorites:{
        type: Array,
        require: true
    },
    cartItens:{
        type: Array,
        required: true
    },
    ordersList:{
        type: Array,
        required: true
    }
})

const User = mongoose.model("user", UserSchema, "users");

module.exports = User;