const {Router} = require("express");
const router = Router();
const productsModel = require('../../models/Products')
const productServices = require('../../services/products.service')


//Retornar todos os produtos
router.get("/", productServices.getAllProducts);

//Cadastrar um produto
router.post('/', productServices.addProduct);

// Deletar um produto pelo id
router.delete("/:id", productServices.removeProductById);

//Retornar produto por id
router.get("/:id", productServices.findProductById);

//Retornar produtos pela categoria
router.get("/filter/:filter", productServices.findProductByCategory);

//Adicionar resposta à lista de respostas do quiz satisfação do produto
router.patch("/:id", productServices.addFeedback);

module.exports = router;