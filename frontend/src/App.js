import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Floating WhatsApp Button
function WhatsAppButton() {
  const phoneNumber = "919440203095"; // Your phone number without + sign
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#FFE500] rounded-full shadow-lg shadow-[#FFE500]/30 hover:bg-[#FFE500]/90 transition-all duration-300 hover:scale-110 group border-2 border-black/10"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-black text-3xl"></i>
      {/* Tooltip */}
      <span className="absolute right-16 bg-black text-[#FFE500] px-3 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#FFE500]/20">
        Chat with us
      </span>
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </div>
  );
}

export default App;
