import {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
export default function Cart({cartItems,setCartItem}){
    
    const[complete,setComplete]=useState(false);

    function increaseQty(item){
       if(item.product.stock===item.qty)
       {
        return;
       }
       else{
           const addValue=cartItems.map((eachValue)=>{
            if(eachValue.product._id===item.product._id)
            {
                eachValue.qty++;
            }
            return eachValue;
            })
            setCartItem(addValue);
       }
       
    }

    function decreaseQty(item){
      
       if(item.qty>1)
        {
           const addValue=cartItems.map((eachValue)=>{
            if(eachValue.product._id===item.product._id)
            {
                eachValue.qty--
            }
            return eachValue;
            })
            setCartItem(addValue);
       }
       
    }

    function removeCartItem(item)
    {
        const addValue=cartItems.filter((i)=>{
            console.log(i);
            if(i.product._id === item.product._id)
            {
                return false;
            }
            else    return true;

        })
        setCartItem(addValue);
    }

    function orderHandler()
    {
        fetch(process.env.REACT_APP_API_URL+'/order',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(cartItems)

        })
        .then(()=>{
            setCartItem([])
            setComplete(true)
            toast.success("Order Placed!!")
        })
    }

    return  cartItems.length>0?<Fragment>
        <div className="container container-fluid">
                    <h2 className="mt-5">Your Cart: <b>items {cartItems.length}</b></h2>
                    
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8">
                            {cartItems.map((item)=>(<Fragment>
                                
                                <div className="cart-item">
                                    <div className="row">
                                        <div className="col-4 col-lg-3">
                                            <img src={item.product.image} alt="Laptop" height="90" width="115"/>
                                        </div>

                                        <div className="col-5 col-lg-3">
                                            <Link to={"/product/"+item.product._id}>{item.product.name}</Link>
                                        </div>


                                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p id="card_item_price">₹{item.product.price}</p>
                                        </div>

                                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <div className="stockCounter d-inline">
                                                <span className="btn btn-danger minus" onClick={()=>decreaseQty(item)}>-</span>
                                                <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                                                <span className="btn btn-primary plus" onClick={()=>increaseQty(item)}>+</span>
                                            </div>
                                        </div>

                                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                            <i id="delete_cart_item" className="fa fa-trash btn btn-danger" onClick={()=>removeCartItem(item)}></i>
                                        </div>

                                    </div>
                                </div>
                            </Fragment>))}
                            <hr />
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div id="order_summary">
                                <h4>Order Summary</h4>
                                <hr />
                                <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc,item)=>(acc+item.qty),0)}</span></p>
                                <p>Est. total: <span className="order-summary-values">₹{cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)}</span></p>

                                <hr />
                                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={orderHandler}>Place Order</button>
                            </div>
                        </div>
                    </div>
        </div>
    </Fragment>:(!complete?<h1 className='mt-5'>Your Cart Item is Empty</h1>
    :<Fragment>
            <h1 className='mt-5'>Your order is placed successfully!!</h1>
    </Fragment>)
}