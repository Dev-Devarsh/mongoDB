// in mongooes we can apply schemas , validation , control fields creation and it's type
// mongooes has two types  (1) schema , (2) model
// (1) schemas are used define fiels in db
// (2) model by using schemas connects node-JS to mongoDB

const mongooes = require('mongoose');
const uri = 'mongodb://localhost:27017/express';
async function main() {
    await mongooes.connect(uri);
    const schemas = new mongooes.Schema({
        name:String,
        age : Number,
    })
    const ProfileModel = mongooes.model('mongos',schemas);
    let data = new ProfileModel({name:'devarsh',age:8888});
    let result = await data.save();
    console.log(result);
} 

main();
 
// app.listen(4500);
