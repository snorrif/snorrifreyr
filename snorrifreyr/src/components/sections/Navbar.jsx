import { useEffect, useState } from "react";


export const Navbar = ({ menuopen, Setismenuopen }) => {

  const [showToast, setShowToast] = useState(false);
  const [menuid,semenui]=useState(false);

  useEffect(() => {
    document.body.style.overflow = menuopen ? "hidden" : "";
  }, [menuopen]);


  useEffect(() => {
    if (!showToast) return;
    const t = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(t);
  }, [showToast]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/30 backdrop-blur border-b border-white/5 shadow-large">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="mr-10 font-mono text-xl font-bold text-white">
            {" "}snorri.freyr{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"

            onClick={() => Setismenuopen(prev => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">about</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">contact</a>

            <button
            onClick={() => setShowToast(true)}
            className="ml-1 inline-flex items-center gap-2 rounded-2xl border border-lime-300/40 animate-pulse-colors bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200 shadow-[0_0_18px_-6px_rgba(190,242,100,0.6)] hover:border-lime-300/70 hover:shadow-[0_0_28px_-6px_rgba(190,242,100,0.7)]"
          >
             Light mode
          </button>

          </div>
        </div>
      </div>


      {showToast && (
        <div className="fixed right-4 top-20 z-50 max-w-sm rounded-xl border border-lime-300/40 bg-black/80 p-3 text-xs text-zinc-100 shadow-[0_0_30px_-10px_rgba(190,242,100,0.8)] backdrop-blur">
          Dark mode is better for your eyes and screen — not letting you turn it off 🙂
            <button
                onClick={() => setShowToast(false)}
                className="absolute top-6 right-16 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>
        </div>
      )}
    </nav>
  );
};
