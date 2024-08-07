"use client"; // Add this line to make the component a Client Component

import React, { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const menuItems = [
    { name: "Espresso", description: "Rich and bold espresso shot", price: "$2.50" },
    { name: "Latte", description: "Smooth and creamy latte", price: "$3.50" },
    { name: "Cappuccino", description: "Frothy and delicious cappuccino", price: "$3.00" },
    { name: "Americano", description: "Strong and classic americano", price: "$2.75" },
    { name: "Mocha", description: "Chocolate flavored coffee", price: "$3.75" },
    { name: "Macchiato", description: "Espresso with a splash of milk", price: "$3.25" },
    // Add more items as needed
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-8 text-center">Order Your Favorite Coffee</h1>
        <div className="space-y-4 overflow-auto max-h-[calc(100vh-20rem)]">
          {menuItems.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="mt-2 text-gray-600">{item.description}</p>
              <p className="mt-2 text-gray-800 font-bold">{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md mt-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="border-b py-2 flex justify-between items-center">
                <span>{item.name}</span>
                <span className="font-bold">{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
