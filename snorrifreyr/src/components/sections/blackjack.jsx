import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const Blackjack = () => {
  const [cards, setCards] = useState([]); // Array to store card values
  const [money, setMoney] = useState(100); // Example: Initialize money with 100
  const [cardsSum,setCardsSum]=useState(0);
  const handleHit = () => {
    const newCard = randomIntFromInterval(1, 13);
    const newSum = cardsSum + newCard; // Calculate the new sum
    setCards([...cards, newCard]);
    setCardsSum(newSum);

    if (newSum > 21) {
      loss(); // Invoke the loss function
    }
  };
  const loss = () => {
    setCards([])
    setCardsSum(0)
    setMoney(money-25)
  };

  return (
    <section id="Blackjack" className="min-h-screen bg-[#0a0a0b] text-zinc-200 selection:bg-lime-400/30 selection:text-zinc-50">
      <h1>Blackjack</h1>
      <h3>Card values: {cards.join(", ")}</h3> {/* Display all card values */}
      <h3>card total {cardsSum}</h3>
      <h3>Money: ${money}</h3> {/* Display money */}

      <input
        type="button"
        value="Hit"
        onClick={handleHit}
        className="ml-4 mt-4 group inline-flex items-center gap-2 rounded-2xl border border-sky-400/40 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-sky-400/70 hover:shadow-[0_0_25px_-6px_rgba(190,242,100,0.65)]"
      />
      <button className="ml-4 mt-4">Stand</button>
    </section>
  );
};