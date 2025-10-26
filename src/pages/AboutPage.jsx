// src/pages/AboutPage.jsx
import SectionTitle from "../components/SectionTitle"; // Reusable title
import FadeInSection from "../components/FadeInSection"; // Animation
import AboutSectionContent from "../components/AboutSection"; // Renamed import
import WhyChooseUsSection from "../components/WhyChooseUsSection"; // Reuse Why Choose Us
import CoreValuesSection from "../components/CoreValuesSection"; // <-- Import Core Values
import TeamSection from "../components/TeamSection"; // <-- Import Team Section
import CtaSection from "../components/CtaSection";

// Reusing the simple PageHeader component
const PageHeader = ({ title, breadcrumb }) => (
  <section className="bg-primary text-white py-5">
    <div className="container text-center">
      <h1 className="display-4 fw-bold text-white">{title}</h1>
      {breadcrumb && <p className="lead text-white">{breadcrumb}</p>}
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About NekZoho" breadcrumb="Home / About Us" />

      {/* Reuse the About Section component */}
      <FadeInSection>
        <AboutSectionContent />
      </FadeInSection>

      {/* --- ADD CORE VALUES SECTION --- */}
      <FadeInSection>
        <CoreValuesSection />
      </FadeInSection>
      {/* --- END CORE VALUES SECTION --- */}

      {/* --- ADD TEAM SECTION --- */}
      <FadeInSection>
        <TeamSection />
      </FadeInSection>
      {/* --- END TEAM SECTION --- */}

      {/* Reuse the Why Choose Us Section component */}
      <FadeInSection>
        <WhyChooseUsSection className="bg-light-textured-1" />
      </FadeInSection>

      <FadeInSection>
        <CtaSection />
      </FadeInSection>
    </>
  );
};

export default AboutPage;
