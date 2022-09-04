import React, { useEffect, useState } from 'react';
import "./Offers.css";

const Offers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(()=>{
        fetch('./offersCommit.json')
        .then(res => res.json())
        .then(data => setOffers(data))
    },[]);
    return (
        <div>
            <div className='offers_commit'>
                {
                    offers.map(offer => <div key={offer.id}>
                        <img src={offer.img} alt="" />
                        <h3>{offer.name}</h3>
                        <span>{offer.des}</span>
                    </div> )
                }
            </div>
            <div className='offer_banners'>
                <div className="fashion">
                    <img width="100%" src="https://i.ibb.co/KFTKL74/Summer-Autumn.png" alt="" />
                </div>
                <div className="fashion_for_men">
                    <img width="100%" src="https://i.ibb.co/SxNH8qj/30.png" alt="" />
                </div>
                <div className="fashion">
                    <img width="100%" src="https://i.ibb.co/dM2CF5m/New-Fashion-Styles.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Offers;