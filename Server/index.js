const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000. http://localhost:3000");
})