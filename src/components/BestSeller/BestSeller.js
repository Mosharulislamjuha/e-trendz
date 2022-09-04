import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Fade } from 'react-reveal';
import "./BestSeller.css";

const BestSeller = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setSellers(data[0].bestSeller))
    },[]);

    return (
        <div className='best_seller_container'>
            <div className='seller_info'>
                <h3>BEST SELLERS</h3>
                <i>The best production from us</i> <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate eveniet amet porro error.</p>
            </div>
            <Fade left>
            <div className='seller_packages'>
                    {
                        sellers.map(seller => 
                            <div className='seller_package' key={seller.id}>
                                <ul>
                                    <li>
                                        <button>
                                        <i class="fas fa-shopping-cart"></i>
                                        </button>
                                    </li>
                                    <li><i class="fas fa-heart"></i></li>
                                    <li><i class="fas fa-exchange-alt"></i></li>
                                </ul>
                                <img src={seller.img} width="100%" height="60%" alt="" />
                                <h5>{seller.name}</h5>
                                <span>${seller.price}</span>
                                <p className='rating'>
                                    <Rating
                                        placeholderRating={seller.rating}
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

export default BestSeller;
