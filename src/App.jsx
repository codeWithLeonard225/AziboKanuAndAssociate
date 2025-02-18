import React, { useRef } from 'react';
import Navbar from './Component/Nav/Navbar';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import OurTeam from './Component/OurTeam/OurTeam';

function App() {
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  return (
    <main>
      <div className="z-50 w-full bg-white shadow-md fixed text-black">
        <Navbar />
      </div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="team" ref={teamRef}>
        <OurTeam />
      </section>
    </main>
  );
}

export default App;
