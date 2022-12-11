const {Router} = require("express");
const router = Router();
const productsModel = require('../../models/Products')


//Retornar todos os produtos
router.get("/", async (req, res) => {
    const products = await productsModel.find()

    if(products.length === 0){
      return res.status(400).send({message: "Não há produtos cadastrados."})
    }
    
    return res.status(200).send(products);
})

//Cadastrar um produto
router.post('/', (req, res) => {
    const product = new productsModel({
      nome: req.body.nome,
      categoria: req.body.categoria,
      preco: req.body.preco,
      descricao: req.body.descricao,
      imagens: req.body.imagens,
      cores: req.body.cores,
      detalhes: req.body.detalhes
    })
  
    product.save(function(err){
      if(err){
        console.log(err)
        return res.status(400).send({message: "Não foi possível cadastrar o produto."});
      }
      else{
        return res.status(200).send({message: "Produto cadastrado com sucesso!"});
      }
    })
})

// Deletar um produto pelo id
router.delete("/:id", async(req, res) => {
    const id = req.params.id;

    try{
        await productsModel.findByIdAndDelete(id);
        return res.status(200).send({message: "Produto apagado com sucesso!"});
    }catch(err){
        console.log(err.message)
        return res.status(400).send({message: "Não foi possível apagar o produto!"});
    }    
})

//Retornar produto por id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
  
    const product = await productsModel.findById(id);

    if(product){
      return res.status(200).send(product);
    }

    return res.status(400).send({message: "Nenhum produto com esse id foi encontrado."});
})

//Retornar produtos pela categoria
router.get("/filter/:filter", async (req, res) => {
    const filter = req.params.filter;
  
    try{
        const filteredProducts = await productsModel.find({categoria: filter})

        if(filteredProducts.length === 0){
          return res.status(400).send({message: "Não há produtos compatíveis com essa categoria!"});
        }
        
        return res.status(200).send(filteredProducts)
    }catch(err){
        console.log(err.message)
        return res.status(400).send({message: "Não foi possível realizar essa filtragem."});
    }
    
})
  
module.exports = router;