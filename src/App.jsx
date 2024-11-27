import Control from "./components/Control"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import Carousel from "./components/SlideCarousel"
import Train from "./components/Train"
import Navbar from "./shared/Navbar"


function App() {
  

  return (
   <>
  <div className="border--2 border-red-900 shadow ">
  <Navbar/>
  </div>
  <HeroSection/>
  <Partners />
  <Control/>
  <Train/>
  <Carousel/>
  
   </>
  )
}

export default App
