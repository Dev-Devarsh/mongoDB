// in mongooes we can apply schemas , validation , control fields creation and it's type
// mongooes has two types  (1) schema , (2) model
// (1) schemas are used define fiels in db
// (2) model by using schemas connects node-JS to mongoDB


const { response } = require('express');
const express = require('express');
require('./config');
const profileSchema = require('./profile');


const app = express();
app.use(express.json()); // to convert post api data into json

app.post('/create', async function (req, resp) {
    let data = new profileSchema(req.body);
    let result = await data.save();
    console.log(req.body);
    resp.send(result);
});

app.listen(5000)