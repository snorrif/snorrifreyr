import { useEffect } from "react";

export const Mobilemenu = ({ menuopen, Setismenuopen }) => {
    useEffect(() => {
        document.body.style.overflow = menuopen ? "hidden" : "";
    }, [menuopen]);

    return (
        <div
            className={`fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/5 shadow-large z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${menuopen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            <button
                onClick={() => Setismenuopen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Vertical nav */}
            <div className="flex flex-col items-center space-y-6">
                <a href="#home" onClick ={(()=>Setismenuopen(false))} className="text-gray-300 hover:text-white transition-colors text-3xl">
                    home
                </a>
                <a href="#about"  onClick ={(()=>Setismenuopen(false))} className="text-gray-300 hover:text-white transition-colors text-3xl">
                    about
                </a>
                <a href="#projects" onClick ={(()=>Setismenuopen(false))} className="text-gray-300 hover:text-white transition-colors text-3xl">
                    projects
                </a>
                <a href="#contact"  onClick ={(()=>Setismenuopen(false))} className="text-gray-300 hover:text-white transition-colors text-3xl">
                    contact
                </a>
            </div>
        </div>
    );
};
