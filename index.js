// start code read from mongodb.js
/* cons : 
    1)  mongoDb package there is no schema , means we can not stop extra field added by user side
        it means if in a collection there is 4 field so we can't control 5th field creation i.e it can be create by user side
     
    2) we can't control fields type , it means if user enter age as String so age type will be chnaged in db for that user */
const dbConnection = require('./mongodb');

//toArray will return promise(Future) objects 
//.then method is used to handle promise(Future) objects
// (method 1) how to handle promise(Future) objects
dbConnection().then((result) => {
    result.find().toArray().then((data)=> {
            //console.warn(data);
        })
    });


// how to make function without using function keyWord
// (method 2) how to handle promise(Future) objects
 const main = async() =>{
    let data = await dbConnection();
    data = await data.find().toArray();
    console.warn(data);
}

main();