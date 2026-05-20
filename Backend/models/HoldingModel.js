const { model}=require('mongoose');

const {HoldingSchema}=require('../Schema/HoldingSchema');
const HoldingModel=new(model)('Holding',HoldingSchema);
module.exports={HoldingModel};