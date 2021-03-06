const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description :{
        type: String,
        required: true
    },
    price: {
        type: Number,
        currency: "EUR",
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item',ItemSchema);