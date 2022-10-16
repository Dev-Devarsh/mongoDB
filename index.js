const http = require('http');
const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app =  express();

app.use(express.json()); // to convert post api data into json

app.delete('/',async function (req, res) {
    let data = await dbConnect();
    // only use this method
    let result  = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    console.log(result);

    if (result.acknowledged) {
        res.send({"status": 200});
        
    } else {
        res.send({"status": 404});
        
    }
}); 
 
app.listen(4500);
