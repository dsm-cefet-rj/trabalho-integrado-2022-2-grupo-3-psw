const  mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    questoes:{
        type: Array,
        required: true,
    },
    respostasSatis: {
        type: Array,
        required: true,
    }
});

const QuizS = mongoose.Model("QuizS", QuizSchema);

module.exports = QuizS;