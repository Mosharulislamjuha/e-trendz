import React, { useState } from 'react';
import Discount from '../../Discount/Discount';
import Banner from '../Banner/Banner';
import BestSeller from '../BestSeller/BestSeller';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Offers from '../Offers/Offers';


const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <BestSeller />
            <Offers />
            <Featured />
            <Discount />
            <Footer />
        </div>
    );
};

export default Home;