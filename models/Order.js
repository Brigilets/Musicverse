const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = require('mongodb').ObjectID

const OrderSchema = new Schema({
    _id:{
        type: String
    },
    userId: {
        type: String,
        ref: 'user'
    },
    items: [{
        productId: {
            type: String,
            ref: 'item'
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: Number
    }],
    total: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Order = mongoose.model('order',OrderSchema);