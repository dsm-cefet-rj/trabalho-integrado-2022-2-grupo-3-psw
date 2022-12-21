const mongoose = require("mongoose");

const connectDatabase = async () => {
    mongoose.set('strictQuery', false);
    console.log("Conectando ao banco de dados!");

    mongoose.connect("mongodb+srv://admin:admin@deepsleep.xnlzsvf.mongodb.net/?retryWrites=true&w=majority", 
    {
        useNewUrlParser:true, useUnifiedTopology:true
    })
    .then(()=>{console.log("Banco de dados connectado")})
    .catch((error) => {console.log(error)})
}


module.exports = connectDatabase