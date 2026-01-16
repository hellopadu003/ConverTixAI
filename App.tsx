import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseMe from './components/WhyChooseMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Hero />
      <WhyChooseMe />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </AuthProvider>
  );
};

export default App;
