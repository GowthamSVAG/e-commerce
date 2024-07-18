const productModel=require('../model/productModel');

exports.getProducts=async(req,res,next)=>{
    try{
        const query=req.query.keyword?{name:{
            $regex:req.query.keyword,
            $options:'i'
        }}:{};
        const products=await productModel.find(query);
        res.json({
            success:true,
            products 
        })
    }
    catch(error){
        res.json({
            success:false,
            message:"Unable to Get Product Id"
        })

    }

}

exports.getSingleProduct=async(req,res,next)=>{
   
    try{
        const singleProduct=await productModel.findById(req.params.id);
        res.json({
            success:true,
            singleProduct
        })
    }
    catch(error){
        res.json({
            success:false,
            message:"Unable to get the ID"
        })
        
    }
   
}
