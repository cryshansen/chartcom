import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ContactModal from './components/ContactModal'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Creds from './pages/Creds';
import Artelier from './pages/Artelier';
import Artfolio from './pages/Artfolio';
import About from './pages/About';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artelier" element={<Artelier />} />
        <Route path="/artfolio" element={<Artfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creds" element={<Creds />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactModal />
      <Footer />
    </>
  )
}



export default App
