// in mongooes we can apply schemas , validation , control fields creation and it's type
// mongooes has two types  (1) schema , (2) model
// (1) schemas are used define fiels in db
// (2) model by using schemas connects node-JS to mongoDB

const mongooes = require('mongoose');
const uri = 'mongodb://localhost:27017/express';

const schemas = new mongooes.Schema({
    name: String,
    age: Number
})
 upDateDB = async () => {
    await mongooes.connect(uri);
    const ageModel =  mongooes.model('mongo', schemas);
    let data = await ageModel.updateOne(
        { name: 'devarsh 13213' },
        {
            $set: { name: 'devarsh 444' }
        }
    )
    console.log(data);
    
}

deleteData = async () => {
    await mongooes.connect(uri);
    const ageModel =  mongooes.model('mongo', schemas);
    let data = await ageModel.deleteOne({ name: 'devarsh 5'});
    console.log(data);
}

findInDB = async () => {
    await mongooes.connect(uri);
    const ageModel =  mongooes.model('mongo', schemas);
    let data = await ageModel.find({})
    console.log(data);
}

findInDB()