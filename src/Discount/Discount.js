import React from 'react';
import "./Discount.css";

const Discount = () => {
    return (
        <>
            <div className='discount_container'>
                <div className='coupon_form'>
                    <h2>Get Out Special Discount</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut cumque odit <br /> sequi? Amet dolorum nihil alias deserunt aliquam, provident.</p>
                    <form action="">
                        <input type="email" name="email" placeholder='E-mail Address...'/>
                        <button className='btn_coupon' type="submit">Get Coupon Now</button>
                    </form>
                </div>
                <div className='brand_logo'>
                    <div>
                        <img src="https://i.ibb.co/MRPvLZv/brand-logo-1a.png" width="100%" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/7JXZVGj/brand-logo-2a.png" width="100%" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/nQ16Lkv/brand-logo-3a.png" width="100%" alt="" />
                    </div>
                    <div>
                        <img src="https://i.ibb.co/41PyK67/brand-logo-4a.png" width="100%" alt="" />
                    </div>
                </div>
            </div> 
            <div className='get_connect'>
                <div className='stay_tune'>
                    <span>We re confident we have provided all the best for you. Stay connect with us</span>
                </div>
                <div className='social_link'>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-behance"></i>
                </div>
            </div>
        </>      
    );
};

export default Discount;