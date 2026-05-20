const {model}=require("mongoose");
const {orderSchema}=require("../Schema/OrderSchema");
const OrderModel=new model('Order',orderSchema);
module.exports={OrderModel};