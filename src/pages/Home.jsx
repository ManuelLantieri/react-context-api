import React from "react";
import "./HomePage.css";

const snacks = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc6c64",
    title: "Torta al cioccolato",
    description:
      "Una morbida e golosa torta al cioccolato, perfetta per ogni momento della giornata.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1561948955-c39d5a8ea179",
    title: "Biscotti al burro",
    description:
      "Deliziosi biscotti al burro, croccanti e semplici da preparare.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1547547394-ea74e7a63e1f",
    title: "Macedonia di frutta",
    description:
      "Un fresco mix di frutta di stagione, ideale per uno spuntino leggero.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
    title: "Sandwich con avocado",
    description:
      "Un sandwich ricco e salutare con avocado fresco e pane integrale.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc6c64",
    title: "Dolce alle fragole",
    description:
      "Un dolce fresco con fragole fresche e una base di panna montata.",
  },
];

const Home = () => {
  return (
    <div className="homepage">
      <h1>Benvenuti nel nostro blog delle merende!</h1>
      <div className="image-gallery">
        {snacks.map((snack) => (
          <div key={snack.id} className="image-item">
            <img src={snack.image} alt={snack.title} className="home-image" />
            <h2>{snack.title}</h2>
            <p>{snack.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
