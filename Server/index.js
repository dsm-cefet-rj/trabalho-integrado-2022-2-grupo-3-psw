const express = require('express');
const cors = require('cors');
const products = require("./products.js");
const user = require("./routes/userRoutes/userRoutes.js");
const quizReco = require("./routes/quizRRoutes/quizRRoutes.js");
const quizSatis = require('./routes/quizSRoutes/quizSRoutes.js');
const connectDatabase = require('./database/db.js');

const app = express();
app.use(express.json())
app.use(cors());

connectDatabase()

const { calcularPrecoPrazo } = require('correios-brasil');

app.use("/", quizSatis);

app.use("/", quizReco);

//Rota de autenticação/registro de usuários
app.use("/user", user);

//Rota de apresentação
app.get('/', (req,res) => {
    return res.json("Bem vindo a API do DeepSleep!");
});

//Retornar todos os produtos
app.get("/products", (req, res) => {
  return res.send(products);
})

//Retornar produto por id
app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  const product = products.filter(item => item.id == id);
  if(product){
    res.send(product[0]);
  }
  res.json({msgError: "Houve um erro"});
})

app.get("/products/filter/:filter", (req, res) => {
  const filter = req.params.filter;

  const filteredProducts = products.filter(item => item.categoria.toLowerCase() == filter.toLowerCase());

  if(filteredProducts){
    return res.send(filteredProducts);
  }
  res.json({msgError: "Houve um erro"});
})

//Modificar produto pelo id
app.put("/products/:id", (req, res) => {
  const id = req.params.id;

  const {name, preco} = req.body;

  const productTemp = products.filter(item => item.id == id);
  const product = productTemp[0];

  if(product){
    product.nome = name;
    product.preco = preco;

    res.send(product);
  }

  res.json({msgError: "Ocorreu um erro"});
  

})

//Buscar valor do frete pelo CEP
app.post("/cep/:cep", async (req, res) =>{
    const cep = req.params.cep;

    let args = {
        sCepOrigem: '20271110',
        sCepDestino: cep,
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico: ['04014'], //Array com os códigos de serviço
        nVlDiametro: '0',
      };

      const resposta = await calcularPrecoPrazo(args);
      const valorEntrega = resposta[0].Valor;

      if (valorEntrega) {
        return res.json({valorFrete: valorEntrega})
      }
      return res.status(400).json();
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000. http://localhost:3000");
})



