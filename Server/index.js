const express = require('express');
const cors = require('cors');
const products = require("./products.js");
const user = require("./routes/userRoutes/userRoutes.js");
const quizReco = require("./routes/quizRRoutes/quizRRoutes.js");
const quizSatis = require('./routes/quizSRoutes/quizSRoutes.js');
const connectDatabase = require('./database/db.js');
const productRoutes = require('./routes/products/productsRoutes')

const app = express();
app.use(express.json())
app.use(cors());

connectDatabase();

const { calcularPrecoPrazo } = require('correios-brasil');

// Rotas relacionadas ao quiz de satisfação
app.use("/", quizSatis);

// Rotas relacionados ao quiz de recomendação
app.use("/", quizReco);

// Rotas relacionados aos produtos
app.use("/products", productRoutes);

// Rota de autenticação/registro de usuários
app.use("/user", user);

//Rota de apresentação
app.get('/', (req,res) => {
    return res.json("Bem vindo a API do DeepSleep!");
});


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



