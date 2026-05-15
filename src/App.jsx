import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppBubble from './components/WhatsAppBubble';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import Faq from './pages/Faq'; // 1. Added the import here
import Contact from './pages/Contact';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  return (
    <>
       <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <WhatsAppBubble />
      <Footer />
    </>
  );
}