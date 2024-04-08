import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Mywork from './components/My Work/Mywork';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
    </>
  );
}

export default App;
