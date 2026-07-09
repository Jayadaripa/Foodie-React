import React from "react";
// import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>📩 Subscribe to Our Newsletter</h2>

        <p>
          Get the latest offers, discounts, and delicious food updates delivered
          straight to your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;