const express=require('express');
const { orderProduct } = require('../controllers/orderController');
const router=express.Router();

router.route('/order').post(orderProduct);
module.exports=router;