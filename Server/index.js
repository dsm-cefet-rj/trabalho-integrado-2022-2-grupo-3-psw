const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());


const { calcularPrecoPrazo } = require('correios-brasil');
const { consultarCep } = require('correios-brasil');
const { response } = require('express');

app.get('/', (req,res) => {
    return res.json(dadosCep)
});

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
        return res.json(valorEntrega)
      }
      return res.status(400).json();
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000. http://localhost:3000");
})



