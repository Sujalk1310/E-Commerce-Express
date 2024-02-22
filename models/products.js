const { Schema, mongoose } = require('mongoose');

const productSchema = new Schema({
    productId: String,
    name: String,
    imgUrl: String,
    price: Number
})

const productModel = mongoose.model( 'Product', productSchema );

module.exports = productModel;