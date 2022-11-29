import express, { json } from 'express';
import cors from 'cors';
import products from "./products.js";
import user from "./routes/userRoutes/userRoutes.js";
import quizReco from "./routes/quizRRoutes/quizRRoutes.js";

const app = express();
app.use(json())
app.use(cors());

import { calcularPrecoPrazo } from 'correios-brasil';

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



