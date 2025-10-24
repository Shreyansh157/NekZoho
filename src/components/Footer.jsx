import { Link } from "react-router-dom"; // Import Link
import { Globe, MessageSquare, Calendar, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-1 pb-5">
      <div className="container">
        <hr className="border-white-50" />
        <div className="row g-4 pt-5 pb-4">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-12">
            <Link className="navbar-brand fw-bold fs-2 text-white text-decoration-none" to="/">
              {" "}
              {/* Changed to Link */}
              Nek<span className="text-white-50">Zoho</span>
            </Link>
            <p className="text-white-50 my-3">Empowering businesses through Zoho, Web Development, and Digital Marketing solutions.</p>
            <div className="d-flex">
              {/* These can remain 'a' tags if they link externally */}
              <a href="#" className="btn btn-outline-primary btn-circle me-2">
                <Globe size={18} />
              </a>
              <a href="#" className="btn btn-outline-primary btn-circle me-2">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="btn btn-outline-primary btn-circle">
                <Calendar size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h5 className="fw-bold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-primary">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/#about" className="text-white-50 text-decoration-none hover-primary">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/#services" className="text-white-50 text-decoration-none hover-primary">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/#blog" className="text-white-50 text-decoration-none hover-primary">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none hover-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h5 className="fw-bold text-white mb-3">Our Services</h5>
            <ul className="list-unstyled">
              {/* These link to sections on the homepage */}
              {["Zoho Consulting", "Web Development", "Digital Marketing", "CRM/ERP", "Automation"].map((item) => (
                <li key={item} className="mb-2">
                  <Link to="/#services" className="text-white-50 text-decoration-none hover-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-4">
            <h5 className="fw-bold text-white mb-3">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="d-flex mb-2">
                <Mail size={18} className="text-primary mt-1 me-2 flex-shrink-0" />
                <a href="mailto:info@nekzoho.com" className="text-white-50 text-decoration-none hover-primary">
                  info@nekzoho.com
                </a>
              </li>
              <li className="d-flex mb-2">
                <Phone size={18} className="text-primary mt-1 me-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white-50 text-decoration-none hover-primary">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="d-flex mb-2">
                <MapPin size={18} className="text-primary mt-1 me-2 flex-shrink-0" />
                <span className="text-white-50">123 Business Way, City, State</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-white-50" />
        <div className="text-center text-white-50 pt-3">
          <small>&copy; {new Date().getFullYear()} NekZoho. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

// Simple helper for footer styling
const style = document.createElement("style");
style.innerHTML = `
.btn-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.hover-primary:hover {
  color: var(--bs-primary) !important;
}
`;
// Prevent adding duplicate styles
if (!document.head.querySelector('style[data-style-helper="footer-contact"]')) {
  style.setAttribute("data-style-helper", "footer-contact");
  document.head.appendChild(style);
}

export default Footer;
