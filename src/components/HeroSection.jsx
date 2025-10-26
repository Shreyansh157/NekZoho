import heroImage from "../assets/hero-dashboard.png"; // Adjusted path

const HeroSection = () => {
  return (
    <section id="home" className="bg-light py-5 pt-0">
      <div className="container py-5">
        <div className="row align-items-center g-5 py-5">
          {/* Left Column (Text) */}
          <div className="col-lg-6">
            <p className="text-primary fw-semibold text-uppercase mb-3">Empowering Your Business Growth</p>
            <h1 className="display-4 fw-bold mb-4 text-dark">
              Streamline, Automate, <br /> and Scale Your Enterprise.
            </h1>
            <p className="lead text-muted mb-4" style={{ maxWidth: "700px" }}>
              NekZoho is your trusted partner for cutting-edge Zoho Consulting, bespoke Web Development, and data-driven Digital Marketing strategies.
            </p>
            <div>
              <a href="#services" className="btn btn-primary btn-lg rounded-pill px-5 py-3 me-lg-3 mb-3 w-100 w-lg-auto">
                Start Your Transformation
              </a>
              <a href="#process" className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 w-100 w-lg-auto">
                Discover Our Solutions
              </a>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="col-lg-6 d-none d-lg-block">
            <img src={heroImage} alt="NekZoho Dashboard" className="img-fluid rounded-3 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
