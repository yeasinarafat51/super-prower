import Allocate from "./components/Allocate"
import Control from "./components/Control"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import Carousel from "./components/SlideCarousel"
import Train from "./components/Train"
import Footer from "./shared/Footer"
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
  <Allocate/>
  <Footer/>
  
   </>
  )
}

export default App
