// start code read from mongodb.js

const dbConnection = require('./mongodb');

async function insert () {
    const db = await dbConnection();
    // insert one entry
    let result = await db.insertOne(
    {name : 'test 2525' ,age : '123' ,no: 15313846,}
    )
    // with the help of insertedID & acknowledged you can pass status code
    console.log(result.insertedId);
    console.log(result);
    
    // to insert multiple entries

    let result2 = await db.insertMany(
    [
        {name : 'test 2525' ,age : '123' ,no: 47817,},
        {name : 'test 541' ,age : '5582' ,no: 58927,},
        {name : 'test 418' ,age : '817' ,no: 1581771,},
    ]);
    console.log(result2.insertedIds);
    console.log(result2.insertedCount);

}

// insert();