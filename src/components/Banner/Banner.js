import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className='style1' >
            <div 
        className='banner_container'>
            
            <h1>THE BEST <br /> <span className='highlighted'>COMMERCIALISM</span> </h1>
            <p className='banner_info'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aperiam accusamus alias <br /> incidunt Velit, facilis expedita tempore nisi error
            </p>
            <div>
                <button className='btn_regular'>BUY NOW</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;