import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetail({cartItems,setCartItem}){
    const[product,setProduct]=useState({});
    const{id}=useParams();
    const[qty,setQty]=useState(1);
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL+'/product/'+id)
        .then(response => response.json())
        .then(function(res){
            setProduct(res.singleProduct)
        })
        
    }, []);
    
    function cartHandler(){
        const itemExist=cartItems.find((item)=>item.product._id==product._id);
        if(!itemExist)
        {
            toast.success("Product is added successfully");
            const newItem={qty,product};
            setCartItem((add)=>[...add,newItem]);
            
        }
    }
    
    function increaseQty(){
        if(product.stock==qty){
            return;
        }
        setQty((qty)=>qty+1);
    }

    function decreaseQty(){
        if(qty>1){
            return setQty((qty)=>qty-1);
        }
    }

    return     <div className="container container-fluid">
    <div className="row f-flex justify-content-around">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <img src={product.image} alt="sdf" height="500" width="500"/>
        </div>

        <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id"></p>

            <hr />

            <div className="rating-outer">
                <div className="rating-inner" style={{width:`${product.ratings/5 *100}%`}}></div>
            </div>
       

            <hr />

            <p id="product_price">₹{product.price}</p>
            <div className="stockCounter d-inline">
                <span className="btn btn-danger minus" onClick={decreaseQty} >-</span>

                <input type="number" className="form-control count d-inline" value={qty} readOnly />

                <span className="btn btn-primary plus" onClick={increaseQty} >+</span>
            </div>
           
            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={cartHandler} disabled={product.stock==0} >Add to Cart</button>
          
            <hr />

            <p>Status: <span id="stock_status">In Stock {product.stock}</span></p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
            <div className="rating w-50"></div>
                    
        </div>

    </div>

</div>
}
