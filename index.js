// in mongooes we can apply schemas , validation , control fields creation and it's type
// mongooes has two types  (1) schema , (2) model
// (1) schemas are used define fiels in db
// (2) model by using schemas connects node-JS to mongoDB


const { response } = require('express');
const express = require('express');
require('./config');
const profileSchema = require('./profile');


const app = express();
app.post('/create', function (req, resp) { 
    response.send('done');
});

app.listen(5000)