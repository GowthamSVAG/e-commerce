import {Link} from 'react-router-dom';

export default function ProductCard({eachProduct}){
    return  <div className="col-sm-12 col-md-5 col-lg-3 my-1">
        <div className="card p-3 rounded">
            <img
            className="card-img-top mx-auto"
            src={eachProduct.image}
            />
            <div className="card-body d-flex flex-column">
            <h5 className="card-title">
                <Link to={'/product'+eachProduct._id}>{eachProduct.name}</Link>
            </h5>
            <div className="ratings mt-auto">
                <div className="rating-outer">
                <div className="rating-inner" style={{width:`${eachProduct.ratings/5 *100}%`}}></div>
                </div>
            </div>
            <p className="card-text">₹{eachProduct.price}</p>
            <Link to={'/product/'+eachProduct._id} id="view_btn" className="btn btn-block">View Details</Link>
            </div>
        </div>
    </div>
}