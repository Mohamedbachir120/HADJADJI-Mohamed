
import './App.css'
import React,{useEffect} from "react";
import  AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import BottomBar from './components/BottomBar';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
          <Home  />
          <About />
          <Services />
          <Skills />
         <Portfolio />
          <Project />
           <Contact />
           <Footer />
           <BottomBar />
    </div>  
  )
}

export default App
