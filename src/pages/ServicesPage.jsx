// src/pages/ServicesPage.jsx
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";
import ServicesSectionContent from "../components/ServicesSection"; // Renamed import
import ProcessSection from "../components/ProcessSection"; // Reuse Process
import CtaSection from "../components/CtaSection";

// Reusing the simple PageHeader component
const PageHeader = ({ title, breadcrumb }) => (
  <section className="bg-primary text-white py-5">
    <div className="container text-center">
      <h1 className="display-4 fw-bold text-white">{title}</h1>
      {breadcrumb && <p className="lead text-white-75">{breadcrumb}</p>}
    </div>
  </section>
);

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Our Services" breadcrumb="Home / Services" />

      {/* Reuse the Services Section component from the homepage */}
      <FadeInSection>
        <ServicesSectionContent className="bg-light-textured-1" /> {/* Apply a texture */}
      </FadeInSection>

      {/* Reuse the Process Section component */}
      <FadeInSection>
        <ProcessSection />
      </FadeInSection>

      {/* --- Optional: Add more specific service details or a CTA --- */}

      <FadeInSection>
        <CtaSection />
      </FadeInSection>

      {/* --- End Optional Sections --- */}
    </>
  );
};

export default ServicesPage;
