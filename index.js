const http = require('http');
const express = require('express');
const dbConnect = require('./mongodb');
const app =  express();

app.use(express.json()); // to convert post api data into json

app.get('/', async function (req, res){ // or app.get('/', async (req, res)=>{}
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data)
    res.send(data);   
    
});
app.post('/', async function (req, res){ // or app.get('/', async (req, res)=>{}
 
    console.log(req.body);
    res.send({status : '200'})
    
});
 
app.listen(4500);
