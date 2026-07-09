import React from "react";
// import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "The pizza was absolutely delicious! Fast delivery and amazing service.",
  },
  {
    id: 2,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    review: "Fresh ingredients and great taste. Definitely ordering again!",
  },
  {
    id: 3,
    name: "Sophia Williams",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review: "Loved the desserts! The brownies were soft and chocolatey.",
  },
  {
    id: 4,
    name: "David Miller",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review: "Excellent food and quick delivery. Highly recommended!",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>💬 What Our Customers Say</h2>

      <div className="reviews-container">
        {reviews.map((customer) => (
          <div className="review-card" key={customer.id}>
            <img src={customer.image} alt={customer.name} />

            <h3>{customer.name}</h3>

            <div className="stars">
              {"⭐".repeat(customer.rating)}
            </div>

            <p>"{customer.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;