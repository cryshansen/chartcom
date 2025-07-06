import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ContactModal from './components/ContactModal'; 
import ProductModal from './components/ProductModal'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Creds from './pages/Creds';
import Artelier from './pages/Artelier';
import Artfolio from './pages/Artfolio';
import About from './pages/About';
import Apothecary from './pages/Apothecary';
import Calendar from './pages/Calendar';
import Studio from './pages/Studio';

/** sample page include for image layout but not used */
import MasonryLayout from './pages/MasonLayout'

import Workshops from './pages/Workshops';
import NotFound from './pages/NotFound';

import { useLoading } from "./context/LoadingContext";
import ScrollToTop from './components/ScrollToTop';


 

function App() {
  //const { setLoading } = useLoading();
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
     showLoader();
    const timeout = setTimeout(() => hideLoader(), 800); // simulate delay
    return () =>{ clearTimeout(timeout); hideLoader(); }
  }, [location]);

  return (
    <>
      <ScrollToTop /> {/* 👈 Add this just once here */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artelier" element={<Artelier />} />
        <Route path="/artfolio" element={<Artfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creds" element={<Creds />} />
        <Route path="/about" element={<About />} />
        <Route path="/apothecary" element={<Apothecary />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/masonry" element={<MasonryLayout />} />
        <Route path="/studios/:d" element={<Studio />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactModal />
      <ProductModal />
      <Footer />
    </>
  )
}



export default App
