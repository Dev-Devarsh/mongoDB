const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);   

async function dbConnection() { 
    let result = await client.connect();
     let db =  result.db('express');
   return db.collection('mongo');
}

module.exports = dbConnection;

// async function dbConnection() { 
//     let result = await client.connect();
//   let db =  result.db('express');
//    let collection = db.collection('mongo');
//    let res = await collection.find({}).toArray();

//    // it will find documents by id pass in find method
//    let resByFind = await collection.find({name :'devarsh'}).toArray(); 
//      console.log(res);
//      console.log(resByFind);
// }

// dbConnection()