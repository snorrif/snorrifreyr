import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

  function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const rndInt = randomIntFromInterval(1, 13);



export const Blackjack =()=>{
  const [cards,setcards] =useState([]);
  const [money,setmoney]=useState([]);
  const handlehit= () => {setcards(rndInt(1,13))};

    return <section id="Blackjack" className="min-h-screen bg-[#0a0a0b] text-zinc-200 selection:bg-lime-400/30 selection:text-zinc-50">
        con
     

    <h1>Blackjack</h1>
    <h3>card value {card}</h3>
    <h4>money=[money]</h4>


    <input type="button" value="hit" onClick={handlehit } className="ml-4 mt-4 group inline-flex items-center gap-2 rounded-2xl border border-sky-400/40 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-sky-400/70 hover:shadow-[0_0_25px_-6px_rgba(190,242,100,0.65)"/>
    <button>stand</button>
    
    =

      
      </section>
      
            
      
        
}