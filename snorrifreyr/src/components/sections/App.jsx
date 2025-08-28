
import { useEffect, useState } from "react";
import "../../index.css";
import "../App.css";
import { Loadingscreen } from "./lodingscrean";
import { Navbar } from "./Navbar";
import { Mobilemenu } from "./mobilemenu";
import { Home } from "./Home";
import { About } from "./ME";
import { Projects } from "./Projectss";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuopen, Setismenuopen] = useState(false);

 
  const [menuid, setMenuid] = useState("home");

  
  useEffect(() => {
    if (!menuid) return;
    const section = document.getElementById(menuid);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      // close mobile menu after navigating
      Setismenuopen(false);
    }
  }, [menuid]);

  // optional: global CSS smooth scrolling fallback (keeps wheel/anchor smooth)
  // You can also put `html { scroll-behavior: smooth; }` in your CSS.

  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* Pass setMenuid so your nav can call setMenuid('about') etc. */}
        <Navbar
          menuopen={menuopen}
          Setismenuopen={Setismenuopen}
          setMenuid={setMenuid}
        />
        <Mobilemenu
          menuopen={menuopen}
          Setismenuopen={Setismenuopen}
          setMenuid={setMenuid}
        />

        {/* If you have a fixed navbar, keep sections from hiding under it */}
        <section
          id="home"
          className="min-h-screen"
          style={{ scrollMarginTop: "80px" }}
        >
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen"
          style={{ scrollMarginTop: "80px" }}
        >
          <About />
        </section>
        <section
          id="projects"
          className="min-h-screen"
          style={{ scrollMarginTop: "80px" }}
        >
          <Projects />
        </section>

       
      </div>
    </>
  );
}

export default App;
