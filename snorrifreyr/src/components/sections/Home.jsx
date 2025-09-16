import { motion, AnimatePresence } from "framer-motion";

export const Home =()=>{
    return <section id="home" className="min-h-screen bg-[#0a0a0b] text-zinc-200 selection:bg-lime-400/30 selection:text-zinc-50"> 
    
      
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -top-28 left-1/2 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-lime-400/60 via-emerald-400/40 to-sky-400/100" />


        <div className="absolute bottom-[-18rem] right-[-10rem] h-[26rem] w-[26rem] rounded-full blur-3xl opacity-20 bg-lime-400/70" />

   
        <div className="absolute top-1/3 -left-24 h-60 w-60 rounded-full blur-3xl opacity-25 bg-sky-400/100 " />
      </div>


    <section className=" ml-auto mx-auto max-w-6xl px-1 pt-96 pb-14 flex flex-col items-center">
        <motion.div initial= {{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 ,delay: 3.5 }}>
          <h1 className="text-4xl  font-mono tracking-tight text-zinc-50 md:text-6xl">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-lime-300 to-sky-400/100">Snorri Freyr Harðarson</span>
          </h1>
          <p className="mt-4 max-w-prose text-zinc-400">
            I’m currently studying programming, computer security, design, Photoshop, basic robotics, and business fundamentals at Tækniskólinn in Iceland.
          </p>
          
        </motion.div>
      </section>
      <section className="flex flex-col mx-28 mt items-center group  rounded-3xl max-w-4xl border border-white/10 bg-zinc-950 p-5 ">
        <motion.div initial= {{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 ,delay: 3.5 }}>
          <h1 className="text-4xl  font-mono tracking-tight text-zinc-50  md:text-6xl">
            Ungirfrumhvoðlar                     
          </h1>
          <p className="mt-4 max-w-prose text-zinc-400">
            I had the absolute pleasure to take part in Ungir Frumkvöðlar, a competition where you learn exactly what it’s like to make a startup from the first idea to execution, including the business and legal side. We founded SR‑Tuning — an online e‑commerce site for custom CNC‑machined motorcycle parts. As the programmer, I built the website using TypeScript, React, and more, integrating PayPal, Clerk, EmailJS, and other services. The AI started as a simple ChatGPT chatbot, but evolved into a complex multi‑agent system connected to a massive vector database of repair manuals, outperforming all AI models at the time for motorcycle torque specs. We won “Most Innovative Technical Company of 2025”.
          </p>
          <a href="https://www.ungirfrumkvodlar.is/allir-vvnningshafar-fyrirtkjasmiju-ungra-frumkvoela-ja-iceland-2025" className="mt-4 group inline-flex items-center gap-2 rounded-2xl border border-lime-300/40 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-lime-300/70 hover:shadow-[0_0_25px_-6px_rgba(190,242,100,0.65)">Ungirfrumhvoðlar website</a>
          <a href="https://sr-tuning.is" className="ml-4 mt-4 group inline-flex items-center gap-2 rounded-2xl border border-sky-400/40 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-sky-400/70 hover:shadow-[0_0_25px_-6px_rgba(190,242,100,0.65)">SR tuning website</a>
          
        </motion.div>
      </section>
            

      
      </section>
      
            
      
        
}