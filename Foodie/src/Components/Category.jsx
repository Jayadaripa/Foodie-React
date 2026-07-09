import React from "react";
// import "./Categories.css";

const category = [
  {
    id: 1,
    emoji: "🍕",
    name: "Pizza",
    items: "25 Items",
  },
  {
    id: 2,
    emoji: "🍔",
    name: "Burger",
    items: "18 Items",
  },
  {
    id: 3,
    emoji: "🍜",
    name: "Noodles",
    items: "20 Items",
  },
  {
    id: 4,
    emoji: "🍩",
    name: "Desserts",
    items: "15 Items",
  },
  {
    id: 5,
    emoji: "🥗",
    name: "Healthy",
    items: "12 Items",
  },
  {
    id: 6,
    emoji: "🍣",
    name: "Japanese",
    items: "10 Items",
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2>🍽 Explore Food Categories</h2>
      <p>
        Choose your favorite category and discover delicious meals prepared
        with fresh ingredients.
      </p>

      <div className="categories-container">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="category-icon">{category.emoji}</div>
            <h3>{category.name}</h3>
            <span>{category.items}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;