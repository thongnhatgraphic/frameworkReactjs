import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func
};
Product.defaultProps = {
    onAddToCart: null
}


function Product(props) {
    const { product, onAddToCart } = props;

    function showRating(rating) {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i key={i} className="fa fa-star"></i>)

        }
        for (var j = 1; j <= 5 - rating; j++) {
            result.push(<i key={rating + j} className="fa fa-star-o"></i>)
        }
        return result
    }
    return (
        <div className="col-lg-4 col-md-6 mb-r" key={product.id}>
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={product.image}
                        className="img-fluid" alt={product.name} />
                    <span>
                        <div className="mask waves-light waves-effect waves-light">
                        </div>
                    </span>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <span>{product.name}</span>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            {showRating(product.rating)}
                        </li>
                    </ul>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                            <span className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                <i
                                    onClick={() => { onAddToCart(product, 1) }}
                                    className="fa fa-shopping-cart"
                                ></i>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div >

    )

}


export default Product;