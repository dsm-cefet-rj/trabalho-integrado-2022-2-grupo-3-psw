const Quiz = require('../models/Quiz');
const create = (body) => Quiz.create(body);

module.exports = {
    create, 
};