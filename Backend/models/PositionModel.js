
// const {model}=require("mongoose");
// const {PositionSchema}=require("../Schema/PostitionSchema");
const {model}=require("mongoose");
const {PositionSchema}=require("../Schema/PostitionSchema");
const PositionModel=new model('Position',PositionSchema);
module.exports={PositionModel};