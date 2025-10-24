import SectionTitle from "../components/SectionTitle"; // Reusable title
import FadeInSection from "../components/FadeInSection"; // Animation
import { Mail, Phone, MapPin } from "lucide-react"; // Icons

const ContactPage = () => {
  return (
    <FadeInSection>
      <section id="contact-page" className="section-padding">
        <div className="container">
          <SectionTitle
            preTitle="Get In Touch"
            title="Contact Us"
            description="We'd love to hear from you. Reach out with questions or to start your project."
          />

          <div className="row g-5">
            {/* Contact Form Column */}
            <div className="col-lg-7">
              <h3 className="fw-bold text-dark mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control form-control-lg" id="contactName" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control form-control-lg" id="contactEmail" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="contactSubject" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control form-control-lg" id="contactSubject" placeholder="Subject of your message" />
                </div>
                <div className="mb-4">
                  <label htmlFor="contactMessage" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control form-control-lg" id="contactMessage" rows="5" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg rounded-pill px-5 py-3">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Column */}
            <div className="col-lg-5">
              <h3 className="fw-bold text-dark mb-4">Contact Information</h3>
              <p className="text-muted mb-4">Feel free to reach out via email, phone, or visit our office.</p>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="icon-shape">
                    <Mail size={32} />
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="fs-5 fw-bold">Email Us</h4>
                  <a href="mailto:info@nekzoho.com" className="text-muted text-decoration-none hover-primary">
                    info@nekzoho.com
                  </a>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="icon-shape">
                    <Phone size={32} />
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="fs-5 fw-bold">Call Us</h4>
                  <a href="tel:+1234567890" className="text-muted text-decoration-none hover-primary">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <div className="icon-shape">
                    <MapPin size={32} />
                  </div>
                </div>
                <div className="ms-4">
                  <h4 className="fs-5 fw-bold">Visit Us</h4>
                  <p className="text-muted mb-0">
                    123 Business Way, Suite 400,
                    <br />
                    City, State, ZIP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default ContactPage;

// Need helper style for hover effect on contact links if not already global
const style = document.createElement("style");
style.innerHTML = `
.hover-primary:hover {
  color: var(--bs-primary) !important;
}
`;
// Prevent adding duplicate styles if Footer is also on the page
if (!document.head.querySelector('style[data-style-helper="footer-contact"]')) {
  style.setAttribute("data-style-helper", "footer-contact");
  document.head.appendChild(style);
}
