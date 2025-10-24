// src/components/Header.jsx
import { Menu } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Renamed to RouterLink
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if we are on the home page

  // Define nav items with their target (ID for scroll or path for route)
  const navItems = [
    { name: "Home", target: "home", isScroll: true }, // Scroll target ID
    { name: "About", target: "about", isScroll: true }, // Scroll target ID
    { name: "Services", target: "services", isScroll: true }, // Scroll target ID
    { name: "Blog", target: "blog", isScroll: true }, // Scroll target ID
    { name: "Contact", target: "contact", isScroll: true }, // Route path
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-1">
      <div className="container">
        <RouterLink className="navbar-brand fw-bold fs-4 text-primary pt-2" to="/">
          NEK<span className="text-dark">ZOHO</span>
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
                {/* Conditionally render ScrollLink or RouterLink */}
                {isHomePage && item.isScroll ? (
                  <ScrollLink
                    className="nav-link fw-medium"
                    to={item.target} // Target ID
                    smooth={true}
                    duration={100}
                    offset={-70} // Adjust offset for fixed header height
                    spy={true}
                    activeClass="active" // Optional: add styling for active link
                    style={{ cursor: "pointer" }} // Add pointer cursor
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  // If not on home page OR it's a page link, use RouterLink
                  // For scroll links when not on home, navigate to home + hash
                  <RouterLink className="nav-link fw-medium" to={item.isScroll ? `/#${item.target}` : item.target}>
                    {item.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
          <RouterLink to="/contact" className="btn btn-primary ms-lg-3 rounded-pill fw-bold px-4">
            Get Started
          </RouterLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
