import { CheckCircle } from "lucide-react";
import SectionTitle from "./SectionTitle"; // Import reusable component
import aboutImage from "../assets/about-team.png"; // Adjusted path

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <p className="text-primary fw-semibold text-uppercase mb-2">Our Vision</p>
            <h2 className="display-5 fw-bold text-dark mb-4">About NekZoho</h2>
            <p className="lead text-muted mb-4">
              As a Zoho Authorized Partner, we specialize in transforming businesses through intelligent automation and robust digital strategies.
            </p>
            <p className="text-muted mb-4">
              Our team of certified experts delivers tailored solutions that streamline operations, enhance customer relationships, and drive
              measurable growth.
            </p>
            <ul className="list-unstyled text-dark fs-5">
              <li className="mb-2 d-flex">
                <CheckCircle className="text-primary me-2 mt-1 flex-shrink-0" size={24} />
                Zoho Authorized Partner with proven expertise.
              </li>
              <li className="mb-2 d-flex">
                <CheckCircle className="text-primary me-2 mt-1 flex-shrink-0" size={24} />
                Custom solutions for unique business challenges.
              </li>
              <li className="mb-2 d-flex">
                <CheckCircle className="text-primary me-2 mt-1 flex-shrink-0" size={24} />
                Dedicated support and long-term partnership.
              </li>
            </ul>
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-5 py-3 mt-3">
              Meet Our Team
            </a>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img src={aboutImage} alt="NekZoho Team" className="img-fluid rounded-3 shadow-lg" />
              <div
                className="bg-primary text-white p-4 rounded-3 shadow-lg position-absolute d-none d-lg-block"
                style={{ bottom: "-2rem", right: "-2rem" }}
              >
                <h3 className="fw-bold mb-0 text-light">10+</h3>
                <p className="mb-0 fs-5">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
