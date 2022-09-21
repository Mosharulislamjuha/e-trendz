import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <div className="contact_container">
        <div className="contract_media">
          <span>
            <i class="fas fa-phone-alt"></i> +8801762245546
          </span>
          <span>
            <i class="fas fa-envelope"></i> info@eTrendz.com
          </span>
        </div>
        <div className="contact_media">
          
          <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/"> <i class="fab fa-twitter"></i></a>
          
          <Link to="https://www.instagram.com/">
            <i class="fab fa-instagram-square"></i>
          </Link>
          <Link to="https://www.linkedin.com/">
            <i class="fab fa-linkedin-in"></i>
          </Link>
          <Link to="https://behance.net/">
            <i class="fab fa-behance"></i>
          </Link>
        </div>
      </div>
      <div className="navbar">
        <div className="logo">
          <h3>
            <span>e</span>Trendz
          </h3>
        </div>
        <div className="navbar_container">
          <ul className={click ? "nav_items active" : "nav_items"}>
            <li className="nav_item" onClick={closeMenu}>
              HOME
            </li>
            <li className="nav_item" onClick={closeMenu}>
              WOMEN
            </li>
            <li className="nav_item" onClick={closeMenu}>
              MEN
            </li>
            <li className="nav_item" onClick={closeMenu}>
              KIDS
            </li>
            <li className="nav_item" onClick={closeMenu}>
              JEWELLERY
            </li>
            <li className="nav_item" onClick={closeMenu}>
              ACCESSORIES
            </li>
          </ul>
        </div>
        <div>
          <div className="navbar_icon" onClick={handleClick}>
            <div className="shopping_cart">
              <i class="fas fa-shopping-cart"></i>
              <span className="shopping_count">0</span>
            </div>
            <i class="fas fa-search"></i>
            <div className="navbar_toggle">
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div>
              <Link className="nav_item " to={'/login'}><button className="btn_regularr">Log in</button></Link>
              <Link className="nav_item " to={'/signup'}><button className="btn_regularr">Register</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
