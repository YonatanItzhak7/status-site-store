const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Sale = new Schema({
    cities: {type: String,required: true},
    profit:{type:Number,required: true},
    quantity:{type: Number,required: true}
})
module.exports = mongoose.model('sale',Sale)