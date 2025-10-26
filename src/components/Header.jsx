// src/components/Header.jsx
import { Menu } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// ScrollLink is no longer needed if only Get Started used it for scrolling
// import { Link as ScrollLink } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Still needed for potential future logic

  const navItems = [
    { name: "Home", target: "/", isPage: true },
    { name: "About", target: "/about", isPage: true },
    { name: "Services", target: "/services", isPage: true },
    { name: "Blogs", target: "/blogs", isPage: true },
    { name: "Contact", target: "/contact", isPage: true },
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

          {/* --- "Get Started" Button Block Removed --- */}

          {/* Theme Toggle - Now might be the last element */}
          <div className="d-flex align-items-center ms-lg-auto">
            {" "}
            {/* Use ms-lg-auto to push toggle right */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
