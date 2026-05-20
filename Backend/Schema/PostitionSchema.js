const mongoose = require('mongoose');
const PositionSchema=new mongoose.Schema({
    product:{type: String, },
    name: {type: String, },
    avg: {type: Number, },    
    price: {type: Number, },
    net: {type: String, },
    day: {type: String, },
    isLess :{type: Boolean, }
});

module.exports ={PositionSchema};