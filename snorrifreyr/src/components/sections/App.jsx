
import { useEffect, useState } from "react";
import "../../index.css";
import "../App.css";
import { Loadingscreen } from "./lodingscrean";
import { Navbar } from "./Navbar";
import { Mobilemenu } from "./mobilemenu";
import { Home } from "./Home";
import { About } from "./ME";
import { Projects } from "./Projectss";
import { Blackjack } from "./blackjack";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuopen, Setismenuopen] = useState(false);

 
  const [menuid, setMenuid] = useState("home");

  
  useEffect(() => {
    if (!menuid) return;
    const section = document.getElementById(menuid);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
  
      Setismenuopen(false);
    }
  }, [menuid]);



  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >

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
          <Blackjack/>

        </section>

       
      </div>
    </>
  );
}

export default App;
