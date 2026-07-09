import React from "react";
// import "./TodaysSpecial.css";

const TodaysSpecial = () => {
  return (
    <section className="special">
      <div className="special-image">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
          alt="Today's Special Pizza"
        />
      </div>

      <div className="special-content">
        <span className="offer-tag">🔥 TODAY'S SPECIAL</span>

        <h2>Cheesy Pepperoni Pizza</h2>

        <p>
          Crispy crust, rich tomato sauce, premium mozzarella cheese, and
          delicious pepperoni slices baked to perfection.
        </p>

        <div className="special-info">
          <span>⭐ 4.9 Rating</span>
          <span>🚚 25 Min</span>
          <span>🍽 Serves 2</span>
        </div>

        <div className="price-box">
          <h3>$14</h3>
          <del>$20</del>
        </div>

        <button>Order Now 🍕</button>
      </div>
    </section>
  );
}

export default TodaysSpecial;