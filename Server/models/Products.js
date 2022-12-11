const moongose = require('mongoose');

const Products = moongose.model('Products', {
    nome: {
        type: String,
        required: true
    },
    cores: { type: Object},
    imagens: {
        type: Object
    },
    categoria: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    detalhes: {
        type: Object,
    }
});

module.exports = Products; 