const productRepository = require('../repositories/product.repository')

const getAllProducts = async (req, res) => {
    try {
        const products = await productRepository.getAllProducts();

        if (products.length === 0) {
            return res.status(400).send({ message: "Não há produtos cadastrados." })
        }

        return res.status(200).send(products);
    } catch (err) {
        console.log(err.message)
        return res.status(400).send({ message: "Não foi possível retornar todos os produtos." });
    }
}

const addProduct = async (req, res) => {
    const product = await productRepository.addProduct(req.body)
    try {
        product.save(function (err) {
            if (err) {
                console.log(err)
                return res.status(400).send({ message: "Não foi possível cadastrar o produto." });
            }
            else {
                return res.status(200).send({ message: "Produto cadastrado com sucesso!" });
            }
        })

    } catch (err) {
        console.log(err.message)
        return res.status(400).send({ message: "Falha ao tentar adicionar produto." });
    }
}

const findProductById = async (req, res) => {
    const id = req.params.id;

    try{
        const product = await productRepository.findProductById(id);

        if (product) {
            return res.status(200).send(product);
        }
    
        return res.status(400).send({ message: "Nenhum produto com esse id foi encontrado." });
    }catch (err) {
        console.log(err.message)
        return res.status(400).send({ message: "Não foi possível realizar a busca."});
    }
  
}

const removeProductById = async(req, res) => {
    const id = req.params.id;

    try{
        const productRemoved = await productRepository.removeProductById(id);

        if(productRemoved){
           return res.status(200).send({message: "Produto removido com sucesso!"});
        }

        return res.status(400).send({message: "Falha ao tentar remover o produto."});
    }catch (err) {
        console.log(err.message)
        return res.status(400).send({ message: "Não foi possível realizar a busca."});
    }
}

const findProductByCategory = async(req, res) => {
    const category = req.params.filter;

    try{
        const filteredProducts = await productRepository.findProductByCategory(category);

        if(filteredProducts.length === 0){
            return res.status(400).send({message: "Não há produtos compatíveis com essa categoria!"});
        }
          
        return res.status(200).send(filteredProducts);

    }catch (err) {
        console.log(err.message)
        return res.status(400).send({ message: "Não foi possível realizar a busca."});
    }
}

module.exports = {
    getAllProducts,
    addProduct,
    findProductById,
    removeProductById,
    findProductByCategory,
}