import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Review from './Components/Review';
import Newletter from './Components/Newletter';
import TodaySpecial from './Components/TodaysSpecial';
import Hero from'./Components/Hero';
const App = () => {
  const foodItems = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMlvNvCk8QfJIthn0Ow_2S49Zq-2y-fpPHo62ZOdHyD1qFbYTa-ZxJ9Y&s=10",
      itemName: "Margherita Pizza",
      price: "$12",
      ingredients: ["Mozzarella", "Tomato Sauce", "Basil"],
      stock: "In Stock",
      freshlyBaked: true,
      serving: "2 People",
      likedBy: 1245,
      rating: 4.8,
      category: "Pizza",
      deliveryTime: "25 min",
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.jpg?s=612x612&w=0&k=20&c=ZApLb9V7HEHcCa12vKG_4x2314tYUML3CLofF_KBMM4=",
      itemName: "Cheese Burger",
      price: "$8",
      ingredients: ["Beef Patty", "Cheese", "Lettuce", "Tomato"],
      stock: "Only 5 Left",
      freshlyBaked: false,
      serving: "1 Person",
      likedBy: 986,
      rating: 4.6,
      category: "Burger",
      deliveryTime: "20 min",
    },
    {
      id: 3,
      image: "https://www.allrecipes.com/thmb/ziUOvj4f_me5yvZhYCUy0n4IKbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/276725-creamy-chicken-alfredo-VAT-001-Beauty-4x3-c4b026db5cb349f4b8fd627c56f91a42.jpg",
      itemName: "Creamy Alfredo Pasta",
      price: "$10",
      ingredients: ["Pasta", "Cream", "Parmesan", "Garlic"],
      stock: "In Stock",
      freshlyBaked: false,
      serving: "2 People",
      likedBy: 765,
      rating: 4.7,
      category: "Pasta",
      deliveryTime: "30 min",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOx-LzcNb3unxhPvV-fHn_HIETiTkKNpXoZDG5UPjQk-K7ICCvQ7iWPnP&s=10",
      itemName: "Grilled Sandwich",
      price: "$6",
      ingredients: ["Bread", "Cheese", "Vegetables", "Butter"],
      stock: "Out of Stock",
      freshlyBaked: true,
      serving: "1 Person",
      likedBy: 589,
      rating: 4.4,
      category: "Sandwich",
      deliveryTime: "15 min",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/4d/d2/2c/4dd22c6e1f533436f65138cbf0c00c6f.jpg",
      itemName: "Chocolate Donut",
      price: "$4",
      ingredients: ["Flour", "Chocolate", "Sugar", "Butter"],
      stock: "Only 12 Left",
      freshlyBaked: true,
      serving: "1 Person",
      likedBy: 1432,
      rating: 4.9,
      category: "Dessert",
      deliveryTime: "10 min",
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/de/98/63/de98639e714bc5b33dc0e9460296e2c1.jpg",
      itemName: "Butter Croissant",
      price: "$5",
      ingredients: ["Flour", "Butter", "Yeast"],
      stock: "In Stock",
      freshlyBaked: true,
      serving: "1 Person",
      likedBy: 845,
      rating: 4.7,
      category: "Bakery",
      deliveryTime: "15 min",
    },
    {
      id: 7,
      image: "https://i.pinimg.com/736x/58/a0/f8/58a0f82f8fa48680be08624547e5c4a1.jpg",
      itemName: "Fried Chicken",
      price: "$14",
      ingredients: ["Chicken", "Flour", "Spices"],
      stock: "Only 8 Left",
      freshlyBaked: false,
      serving: "2 People",
      likedBy: 2110,
      rating: 4.8,
      category: "Chicken",
      deliveryTime: "30 min",
    },
    {
      id: 8,
      image: "https://i.pinimg.com/736x/3b/37/d3/3b37d3af2c4a550bd296ee34aa980771.jpg",
      itemName: "Beef Tacos",
      price: "$9",
      ingredients: ["Beef", "Tortilla", "Cheese", "Lettuce"],
      stock: "In Stock",
      freshlyBaked: false,
      serving: "2 People",
      likedBy: 724,
      rating: 4.5,
      category: "Mexican",
      deliveryTime: "20 min",
    },
    {
      id: 9,
      image: "https://i.pinimg.com/736x/6a/77/a5/6a77a54676a89457babc29b221b76e4b.jpg",
      itemName: "Veg Hakka Noodles",
      price: "$8",
      ingredients: ["Noodles", "Carrot", "Capsicum", "Soy Sauce"],
      stock: "In Stock",
      freshlyBaked: false,
      serving: "2 People",
      likedBy: 990,
      rating: 4.6,
      category: "Chinese",
      deliveryTime: "25 min",
    },
    {
      id: 10,
      image: "https://i.pinimg.com/736x/77/fe/52/77fe521da3db756a040f6c76fcfec30a.jpg",
      itemName: "Salmon Sushi",
      price: "$18",
      ingredients: ["Rice", "Salmon", "Seaweed"],
      stock: "Only 3 Left",
      freshlyBaked: false,
      serving: "2 People",
      likedBy: 670,
      rating: 4.9,
      category: "Japanese",
      deliveryTime: "35 min",
    },
    {
      id: 11,
      image: "https://i.pinimg.com/736x/6b/51/e4/6b51e4078f51db582033618e0e4f291f.jpg",
      itemName: "Blueberry Pancakes",
      price: "$7",
      ingredients: ["Flour", "Eggs", "Blueberries", "Maple Syrup"],
      stock: "In Stock",
      freshlyBaked: true,
      serving: "1 Person",
      likedBy: 1180,
      rating: 4.8,
      category: "Breakfast",
      deliveryTime: "15 min",
    },
    {
      id: 12,
      image: "https://i.pinimg.com/1200x/ed/e0/80/ede080d9009389d31fb127e2d387afc9.jpg",
      itemName: "Vanilla Ice Cream",
      price: "$5",
      ingredients: ["Milk", "Cream", "Vanilla"],
      stock: "Only 10 Left",
      freshlyBaked: false,
      serving: "1 Person",
      likedBy: 1640,
      rating: 4.9,
      category: "Dessert",
      deliveryTime: "10 min",
    },
    {
      id: 13,
      image: "https://i.pinimg.com/736x/d0/48/37/d048372a84b17d917a0493205ef3e9ab.jpg",
      itemName: "Caesar Salad",
      price: "$9",
      ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
      stock: "In Stock",
      freshlyBaked: false,
      serving: "1 Person",
      likedBy: 530,
      rating: 4.4,
      category: "Salad",
      deliveryTime: "15 min",
    },
    {
      id: 14,
      image: "https://i.pinimg.com/736x/b3/c1/80/b3c180c4075569ac3bcf457b434042e9.jpg",
      itemName: "Chocolate Brownie",
      price: "$6",
      ingredients: ["Chocolate", "Flour", "Butter", "Sugar"],
      stock: "Only 6 Left",
      freshlyBaked: true,
      serving: "1 Person",
      likedBy: 1765,
      rating: 4.9,
      category: "Dessert",
      deliveryTime: "10 min",
    },
    {
      id: 15,
      image: "https://i.pinimg.com/1200x/98/7d/92/987d92558c0659975357382316c31a71.jpg",
      itemName: "Grilled Steak",
      price: "$22",
      ingredients: ["Beef", "Garlic Butter", "Herbs"],
      stock: "Out of Stock",
      freshlyBaked: false,
      serving: "2 People",
      likedBy: 1350,
      rating: 4.9,
      category: "Main Course",
      deliveryTime: "40 min",
    },
  ];

  return (
    <>
      <Navbar />
      
      <Hero/>
      <TodaySpecial/>

      <div className="container">
        {foodItems.map((elem) => (
          <Card
            key={elem.id}
            image={elem.image}
            itemName={elem.itemName}
            price={elem.price}
            ingredients={elem.ingredients}
            stock={elem.stock}
            freshlyBaked={elem.freshlyBaked}
            serving={elem.serving}
            likedBy={elem.likedBy}
            rating={elem.rating}
            category={elem.category}
          />
        ))}
      </div>
      <Newletter/>
       <Review/>
      <Footer />
    </>
  );
};

export default App;