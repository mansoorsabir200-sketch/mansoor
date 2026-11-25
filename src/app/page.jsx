
import Hero from "@/mycompunents/Hero";
import Navbar from "@/mycompunents/Navbar";
import About from "@/mycompunents/About";
import Services from "@/mycompunents/Services";
import Projects from "@/mycompunents/Projects";
import Blog from "@/mycompunents/Blog";
import Contact from "@/mycompunents/Contact";
import Technologies from "@/mycompunents/Technologies";
// import Projects from "@/mycompunents/Projects";


export default function Home() {
  return (<div>
    <Navbar/>
    <Hero/>
    <About />
    <Technologies/>
    <Services />
    <Projects/>
    <Blog />
    <Contact/>  
    
  </div> 
  );
}
