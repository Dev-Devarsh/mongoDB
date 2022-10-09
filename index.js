// start code read from mongodb.js

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