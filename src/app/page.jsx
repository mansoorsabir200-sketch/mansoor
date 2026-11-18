
import Hero from "@/mycompunents/Hero";
import Navbar from "@/mycompunents/Navbar";
import About from "@/mycompunents/About";
import Services from "@/mycompunents/Services";
import Projects from "@/mycompunents/Projects";
import Blog from "@/mycompunents/Blog";
import Contact from "@/mycompunents/Contact";
// import Projects from "@/mycompunents/Projects";


export default function Home() {
  return (<div>
    <Navbar/>
    <Hero/>
    <About />
    <Services />
    <Projects/>
    <Blog />
    <Contact/>  
    
  </div>
  );
}
