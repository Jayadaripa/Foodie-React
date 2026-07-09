import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        🍔 <span>Foodie</span>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-icons">
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <div className="cart">
          <FaShoppingCart className="icon" />
          <span className="cart-count">3</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;