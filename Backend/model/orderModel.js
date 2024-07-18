const mongoose=require('mongoose');

const order=new mongoose.Schema({
    orderItems:Array,
    amount:String,
    status:String,
    createdAt:Date

})

const orderModule=mongoose.model('order',order);
module.exports=orderModule;