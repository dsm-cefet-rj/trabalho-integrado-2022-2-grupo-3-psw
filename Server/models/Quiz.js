const  mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    respostasSatis: {
        type: String,
        required: true,
    },
    respostasReco: {
        type: String,
        required: true,
    }
});

const Quiz = mongoose.Schema("Quiz", QuizSchema);

module.exports = Quiz;