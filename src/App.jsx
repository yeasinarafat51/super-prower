import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import Navbar from "./shared/Navbar"


function App() {
  

  return (
   <>
  <div className="border--2 border-red-900 shadow ">
  <Navbar/>
  </div>
  <HeroSection/>
  <Partners />
  
   </>
  )
}

export default App
