const express=require('express');
const { getProducts, getSingleProduct } = require('../controllers/productController');
const router=express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getSingleProduct);

module.exports=router;
