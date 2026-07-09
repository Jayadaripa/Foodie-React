import React from 'react'


const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.itemName} className="card-img" />

      <div className="card-body">
        <div className="card-top">
          <h2>{props.itemName}</h2>
          <span className="price">{props.price}</span>
        </div>

        <p className="category">{props.category}</p>

        <div className="badges">
          <span className={props.stock === "Out of Stock" ? "out" : "stock"}>
            {props.stock}
          </span>

          {props.freshlyBaked && (
            <span className="fresh">Freshly Baked</span>
          )}
        </div>

        <p className="ingredients">
          <strong>Ingredients:</strong>{" "}
          {props.ingredients.join(", ")}
        </p>

        <div className="details">
          <span>⭐ {props.rating}</span>
          <span>❤️ {props.likedBy}</span>
          <span>🍽 {props.serving}</span>
        </div>

        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
}

export default Card;
