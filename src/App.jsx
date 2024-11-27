import { useState } from "react";
import Allocate from "./components/Allocate";
import Control from "./components/Control";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Carousel from "./components/SlideCarousel";
import Train from "./components/Train";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import Reserve from "./components/Reserve";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div
        className={`${
          darkMode ? "dark" : ""
        } bg-red-950 dark:bg-gray-900  min-h-screen`}
      >
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
        <HeroSection />
        <Partners />
        <Control />
        <Reserve />
        <Train />
        <Carousel />
        <Partners />
        <Allocate />
        <Footer />
      </div>
    </>
  );
}

export default App;
