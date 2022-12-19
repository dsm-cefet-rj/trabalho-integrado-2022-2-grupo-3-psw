const moongose = require('mongoose');

const Products = moongose.model('Products', {
    nome: {
        type: String,
        required: true
    },
    cores: { 
        type: Object
    },
    imagens: {
        type: Object,
        required: true
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
        required: true
    },
    feedback:{
        type: Array,
        required: true
    },
});

module.exports = Products; 