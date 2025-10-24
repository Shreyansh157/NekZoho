// src/components/CtaSection.jsx
import { Link as RouterLink } from "react-router-dom"; // Import Link

const CtaSection = () => {
  return (
    <section id="contact" className="section-padding bg-dark text-white text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="display-4 fw-bold text-white">
              Ready to <span className="text-primary">Elevate Your Business?</span>
            </h2>
            <p className="lead text-white-50 my-4">
              Connect with NekZoho experts today and discover how tailored solutions in Zoho, web development, and digital marketing can drive your
              success.
            </p>
            {/* --- Changed <a> to <RouterLink> --- */}
            <RouterLink to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3">
              Connect With Us
            </RouterLink>
            {/* --- End Change --- */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
