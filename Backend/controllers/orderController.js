const orderModel=require('../model/orderModel');
const productModel=require('../model/productModel');

exports.orderProduct=async(req,res,next)=>{
    
    const cartItem=req.body;
    const amount=Number(cartItem.reduce((acc,item)=>(acc + item.product.price*item.Qty),0)).toFixed(2);
    const status='pending';
    const order=await orderModel.create({amount,status,orderItems:cartItem});

    cartItem.forEach(async(item)=>{
        const product=await productModel.findById(item.product._id);
        product.stock=product.stock-item.qty;
        await product.save();
    })

    res.json({
        
        success:true,
        order
    })
}
