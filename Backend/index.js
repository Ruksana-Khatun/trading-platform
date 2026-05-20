require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Port = process.env.PORT || 5000;
const MongoUrl= process.env.MongoUrl;
const {PositionModel}=require("./models/PositionModel.js");
const {data}=require("./data/data.js");

const app = express();

    
   async function saveData() {
  await PositionModel.insertMany(data);
  console.log("Data Saved");

}

saveData();


app.get('/',(req,res)=>{
    res.send("app is running");
}
)
 

app.listen (Port,()=>{
    console.log(`Server is running on port ${Port}`);
   mongoose.connect(MongoUrl);
   console.log("Connected to MongoDB");
        

   


})