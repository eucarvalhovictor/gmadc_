import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Transparency from './components/Transparency'; // Import the new component
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Transparency /> {/* Add the new Transparency section */}
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;