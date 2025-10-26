// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

// Import Page Components
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";

// --- Apply theme immediately ---
// This IIFE (Immediately Invoked Function Expression) runs before React mounts
(() => {
  const storedTheme = localStorage.getItem("theme");
  // Add system preference check if desired:
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeToApply = storedTheme || "light"; // Default to light
  document.documentElement.setAttribute("data-bs-theme", themeToApply);
})();
// --- End theme application ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
