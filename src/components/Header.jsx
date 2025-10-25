// src/components/Header.jsx
import { Menu } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if we are on the home page

  // Define nav items with their target (ID for scroll or path for route)
  const navItems = [
    { name: "Home", target: "home", isScroll: true, isPage: false }, // Scroll target ID
    { name: "About", target: "/about", isScroll: false, isPage: true },
    { name: "Services", target: "/services", isScroll: false, isPage: true }, // Scroll target ID
    { name: "Blog", target: "/blogs", isScroll: false, isPage: true }, // Scroll target ID
    { name: "Contact", target: "/contact", isScroll: false, isPage: true }, // Route path
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <RouterLink className="navbar-brand fw-bold fs-3 text-primary" to="/">
          Nek<span className="text-dark">Zoho</span>
        </RouterLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <RouterLink className="nav-link fw-medium" to={item.target}>
                  {item.name}
                </RouterLink>
              </li>
            ))}
          </ul>

          {/* --- Conditionally Render "Get Started" Button --- */}
          {isHomePage ? (
            // If on Home page, use ScrollLink to scroll to the contact section
            <ScrollLink
              to="contact" // ID of the CtaSection
              smooth={true}
              duration={100} // Faster scroll
              offset={-70}
              className="btn btn-primary ms-lg-3 rounded-pill fw-bold px-4" // Added fw-bold
              style={{ cursor: "pointer" }}
            >
              Get Started
            </ScrollLink>
          ) : (
            // If on another page, use RouterLink to go to Home page's contact section
            <RouterLink
              to="/#contact" // Go to homepage and then scroll (browser default behavior)
              className="btn btn-primary ms-lg-3 rounded-pill fw-bold px-4" // Added fw-bold
            >
              Get Started
            </RouterLink>
          )}
          {/* --- End Conditional Render --- */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
