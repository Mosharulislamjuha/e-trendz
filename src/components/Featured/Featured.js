import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Fade } from 'react-reveal';
import "./Featured.css";

const Featured = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data[1].featured))
    },[]);

    return (
        <div>
            <div className='feature_title'>
                <h2>FEATURED PRODUCTS</h2>
                <i>Newest trends from top brands</i>
            </div>
            <Fade bottom>
            <div className='products'>
                    {
                        products.map(product => 
                        <div className='seller_package' key={product.id}>
                            <ul>
                                <li>
                                    <button>
                                    <i class="fas fa-shopping-cart"></i>
                                    </button>
                                </li>
                                <li><i class="fas fa-heart"></i></li>
                                <li><i class="fas fa-exchange-alt"></i></li>
                            </ul>
                            <img src={product.img} width="100%" height="70%" alt="" />
                            <h5>{product.name}</h5>
                            <span>${product.price}</span>
                            <p className='rating'>
                                <Rating
                                    placeholderRating={product.rating}
                                    emptySymbol={<i className='far fa-star' />}
                                    placeholderSymbol={<i className='fas fa-star'  />}
                                    fullSymbol={<i className='fas fa-star'  />}
                                    />
                            </p>
                        </div> )
                    }
            </div>
            </Fade>
        </div>
    );
};

export default Featured;