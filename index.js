// in mongooes we can apply schemas , validation , control fields creation and it's type
// mongooes has two types  (1) schema , (2) model
// (1) schemas are used define fiels in db
// (2) model by using schemas connects node-JS to mongoDB

const express = require("express");
require("./config");
const profileSchema = require("./profile");

const app = express();
app.use(express.json()); // to convert post api data into json

app.get("/list", async (req, resp) => {
  let data = await profileSchema.find();
  console.log(data);
  resp.send(data);
});

app.put("/update", async (req, resp) => {
  let data = await profileSchema.updateOne(
    { name: "devarsh 1232" },
    { $set: { name: "dev 132" } }
  );
  console.log(data);
  resp.send(data);
});

app.delete("/delete", async (req, resp) => {
    let data = await profileSchema.deleteOne({name : 'devarsh 525'})
    console.log(data);
    resp.send(data);
});
app.listen(5000);
