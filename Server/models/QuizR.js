const  mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    questoes:{
        type: Array,
        required: true,
    },
    respostasRecomendacao: {
        type: Array,
        required: true,
    }
});

const QuizR = mongoose.Model("QuizR", QuizSchema);

module.exports = QuizR;