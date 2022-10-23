// in mongooes we can apply schemas , validation , control fields creation and it's type
// mongooes has two types  (1) schema , (2) model
// (1) schemas are used define fiels in db
// (2) model by using schemas connects node-JS to mongoDB

const express = require("express");
require("./config");
const profileSchema = require("./profile");

const app = express();
app.use(express.json()); // to convert post api data into json to show in console

app.get("/list", async (req, resp) => {
    let data = await profileSchema.find();
    console.log(data);
    if (data != 0) {
        resp.status(200).send(data) // you can setstatus code whatever you want
    } else {
        resp.status(404).send(null)
    }
});

app.delete("/delete", async (req, resp) => {   
    let data = await profileSchema.deleteOne({
        'name': req.query.name.toString(),
    });
    console.log(req.query.name);
    console.log(data);
    if (data.acknowledged == true && data.deletedCount != 0) {
        resp.status(200).send(data)
    } else {
        resp.status(404).send('data is not deleted')
    }
});

/// OR

// app.delete("/delete/:_id", async (req, resp) => { // put field name to delte it , i.e name , _id ,age
//     let data = await profileSchema.deleteOne(req.params);
//     console.log(data);
//     if (data.acknowledged == true && data.deletedCount != 0) {
//         resp.status(200).send(data)
//     } else {
//         resp.status(404).send('data is not deleted')
//     }
// });


app.post('/create', async function (req, resp) {
    // reqest body will be maped to 'profileSchema' , same like model class
    /*  if you pass age as string this schema will convert that string in to a number and it will not give an error ,if it 
        is not convertable to int it will give you an error , if you pass 'abc' as age programm will terminate you have 
        to re-run program
     */
    let data = await new profileSchema(req.body);
    let result = await data.save();
    if (data.__v == 0) {
        resp.status(200).send()
        console.log(result);
    } else {
        resp.status(404).send('data is not created')
    }

});


app.put("/update", async (req, resp) => {
    let data = await profileSchema.updateOne(
        { 'name': req.query.name.toString(), },
        { $set: req.body }
    );
    if (data.acknowledged == true && data.modifiedCount != 0
        && data.matchedCount != 0) {
        resp.status(200).send(data)
        console.log(data);
    } else {
        resp.status(404).send('data is not update')
    }
});

/// OR
// app.put("/update/:_id", async (req, resp) => {
//     let data = await profileSchema.updateOne(
//         req.params , // query params has '{}' brackets itself so we don't need to take '{}' brackets
//         { $set: req.body }
//     );
//     if (data.acknowledged == true && data.modifiedCount != 0
//         && data.matchedCount != 0) {
//         resp.status(200).send(data)
//         console.log(data);
//     } else {
//         resp.status(404).send('data is not update')
//     }
// });


app.listen(5000);
