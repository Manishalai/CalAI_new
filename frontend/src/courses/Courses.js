// src/App.js
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import data from "./courses.json"; // Import the JSON data

const Courses = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setCards(data);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          description={card.description}
          content={card.content}
          duration={card.duration}
          type={card.type}
        />
      ))}
    </div>
  );
};

export default Courses;
