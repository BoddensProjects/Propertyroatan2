import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppBubble from './components/WhatsAppBubble';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import About from './pages/About';
import Listings from './pages/Listings';
import Faq from './pages/Faq'; // 1. Added the import here
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';


export default function App() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <WhatsAppBubble />
      <Footer />
    </>
  );
}
