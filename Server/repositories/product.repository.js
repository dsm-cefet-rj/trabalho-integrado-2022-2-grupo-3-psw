const productsModel = require('../models/Products')

const getAllProducts = async () => await productsModel.find();

const addProduct = async (body) => {
    const product = new productsModel({
        nome: body.nome,
        categoria: body.categoria,
        preco: body.preco,
        descricao: body.descricao,
        imagens: body.imagens,
        cores: body.cores,
        detalhes: body.detalhes,
    })

    return product;
}

const findProductById = async (id) => await productsModel.findById(id);

const removeProductById = async (id) => await productsModel.findByIdAndDelete(id);

const findProductByCategory = async (category) => await productsModel.find({ categoria: category });

const addFeedback = async (id, feedback) => await productsModel.findOneAndUpdate(
    { _id: id },
    { $push: { feedback: { feedback, dataAdicao: new Date() } } }
);

module.exports = {
    getAllProducts,
    addProduct,
    findProductById,
    removeProductById,
    findProductByCategory,
    addFeedback
}