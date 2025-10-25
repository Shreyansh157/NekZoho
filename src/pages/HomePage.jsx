// Import section components
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import IndustriesSection from "../components/IndustriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/CtaSection";
import FadeInSection from "../components/FadeInSection";

const HomePage = () => {
  return (
    <>
      {/* We don't animate the hero, it's already visible */}
      <HeroSection />

      {/* Wrap sections in the animation component */}
      <FadeInSection>
        <AboutSection />
      </FadeInSection>

      <FadeInSection>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection>
        <ProcessSection />
      </FadeInSection>

      <FadeInSection>
        <IndustriesSection />
      </FadeInSection>

      <FadeInSection>
        <TestimonialsSection />
      </FadeInSection>

      <FadeInSection>
        <WhyChooseUsSection />
      </FadeInSection>

      <FadeInSection>
        <BlogSection />
      </FadeInSection>

      <FadeInSection>
        <CtaSection />
      </FadeInSection>
    </>
  );
};

export default HomePage;
