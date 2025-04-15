import AboutSection from "../Components/AboutSection"
import Hero from "../Components/Hero"
import ServicesSection from "../Components/ServicesSection"

 
const Home = () => {
  return (
    <div>
      <Hero/>
      <div >
        <AboutSection/>
        <ServicesSection/>
      </div>
    </div>
  )
}

export default Home
