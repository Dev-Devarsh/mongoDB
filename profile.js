const mongooes = require('mongoose');

const profileSchema = new mongooes.Schema({
    name: String,
    age: Number,
    no : Number
})

module.exports = mongooes.model('mongos',profileSchema)