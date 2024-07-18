import {Fragment, useEffect, useState} from 'react';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home(){
    const[searchValue,setSearchValue]=useSearchParams('');
    const [products,setProduct]=useState([]);

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/product?'+searchValue)
        .then(response=>response.json())
        .then(res=>setProduct(res.products))
    },[searchValue]);

    return <Fragment>
   
        <h1 id="products_heading">Latest Products</h1>
        <section id="products" className="container mt-5">
        <div className="row">
           {products.map(product=> <ProductCard eachProduct={product} />)}
        </div>
        </section>


    </Fragment>

}