import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Services from "./components/Services"
import About from "./components/About"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <ContactUs />
      <About />
      <Footer />
    </div>
  )
}

export default App
