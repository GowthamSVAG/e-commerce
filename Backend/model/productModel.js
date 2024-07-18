const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    image:String,
    category:String,
    seller:String,
    stock:String,
    numberOfReview:String,
    createdAt:String

});
const productModel=mongoose.model('Product',productSchema);
module.exports=productModel;