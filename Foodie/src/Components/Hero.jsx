import React from "react";
// import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">🍔 Welcome to Foodie</span>

        <h1>
          Delicious Food <br />
          Delivered To <span>Your Door</span>
        </h1>

        <p>
          Discover your favorite meals from top restaurants. Fresh ingredients,
          fast delivery, and unforgettable taste—all in one place.
        </p>

        <div className="hero-buttons">
          <button className="order-btn">Order Now</button>
          <button className="menu-btn">View Menu</button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>500+</h2>
            <p>Food Items</p>
          </div>

          <div>
            <h2>50K+</h2>
            <p>Happy Customers</p>
          </div>

          <div>
            <h2>4.9★</h2>
            <p>Average Rating</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://i.pinimg.com/736x/ad/83/f9/ad83f929678c0ea083138a10699e05e2.jpg"
          alt="Delicious Pizza"
        />
      </div>
    </section>
  );
};

export default Hero;