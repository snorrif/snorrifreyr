import { motion, AnimatePresence } from "framer-motion";

export const About =()=>{
    return <section id="About" className="min-h-screen bg-[#0a0a0b] text-zinc-200 selection:bg-lime-400/30 selection:text-zinc-50"> 
    
      
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -top-28 left-1/2 h-[30rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl opacity-25 bg-gradient-to-r from-lime-400/60 via-emerald-400/40 to-sky-400/100" />


        <div className="absolute bottom-[-18rem] right-[-10rem] h-[26rem] w-[26rem] rounded-full blur-3xl opacity-20 bg-lime-400/70" />

   
        <div className="absolute top-1/3 -left-24 h-60 w-60 rounded-full blur-3xl opacity-25 bg-sky-400/100" />
      </div>


    <section className=" ml-auto mx-auto max-w-6xl px-1 pt-96 pb-14 flex flex-col items-center">
        <motion.div initial= {{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 ,delay: 3.5 }}>
          <h1 className="text-4xl  font-mono tracking-tight text-zinc-50 md:text-6xl">
            about me 
          </h1>
          <p className="mt-4 max-w-prose text-zinc-400">
           Snorri Freyr Harðarson heiti ég og ég var fædur 2007 leingi hef eg hafið mikin ahuga a tölvum og foritun þeira eg birjaði i tölvuleikjar foritun nuna i dag er eg aðanlega að hann firir vefin og gera ganargruna og meira einfalda hluti.
          </p>
          
        </motion.div>
      </section>
      
            

      
      </section>
      
            
      
        
}