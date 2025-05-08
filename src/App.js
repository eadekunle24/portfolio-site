import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Navbar from './components/Navbar';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './custom.css';


function App() {
  return (
    <>
      <>
  <Navbar />
  {/* Other components like Hero, About, Projects, etc */}
</>

      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
