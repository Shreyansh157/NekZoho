// src/App.jsx

// Import the icons you need
import {
  Menu,
  LayoutDashboard,
  Code,
  BarChart,
  Layers,
  Zap,
  Cloud,
  Award,
  Brain,
  CheckCircle,
  Users,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Building2,
  HeartHandshake,
  School,
  Utensils,
  Factory,
  Microscope,
  BookOpen,
  UserCheck,
  DollarSignIcon,
  HardHat,
  Star,
  Globe,
  MessageSquare,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

import heroImage from "./assets/hero-dashboard.png";
import aboutImage from "./assets/about-team.png";
import blogImage1 from "./assets/blog-image-1.jpg";
import blogImage2 from "./assets/blog-image-2.jpg";
import blogImage3 from "./assets/blog-image-3.jpg";

// --- Reusable Section Title Component ---
const SectionTitle = ({ preTitle, title, description }) => (
  <div className="row justify-content-center text-center mb-5">
    <div className="col-lg-8">
      {preTitle && <p className="text-primary fw-semibold text-uppercase mb-2">{preTitle}</p>}
      <h2 className="display-5 fw-bold text-dark">{title}</h2>
      {description && <p className="lead text-muted mt-3">{description}</p>}
    </div>
  </div>
);

// --- Component: Header (FIXED) ---
const Header = () => {
  const navItems = ["Home", "About", "Services", "Blog", "Contact"];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-primary" href="#home">
          Nek<span className="text-dark">Zoho</span>
        </a>
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
          {/* FIX 1: Centered nav items */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a className="nav-link fw-medium" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {/* FIX 2: Updated button text */}
          <a href="#contact" className="btn btn-primary ms-lg-3 rounded-pill px-4">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- Component: Hero Section (REDESIGNED & FIXED) ---
const HeroSection = () => {
  return (
    <section id="home" className="bg-light py-5">
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
              {/* FIX 3: Added responsive margin for stacking */}
              <a href="#services" className="btn btn-primary btn-lg rounded-pill px-5 py-3 mb-3 me-3 w-75 w-lg-auto">
                Start Your Transformation
              </a>
              <a href="#process" className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 mb-3 w-75 w-lg-auto">
                Discover Our Solutions
              </a>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="col-lg-6 ">
            <img src={heroImage} alt="NekZoho Dashboard" className="img-fluid rounded-3 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component: About Section (FIXED) ---
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
              {/* FIX 5: Unsplash About Image */}
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

// --- Component: Services Section ---
const detailedServices = [
  {
    id: 1,
    title: "Zoho Consulting & Customization",
    description: "Optimize your business with tailored Zoho solutions, from initial setup to advanced workflow automation.",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Bespoke Web & App Development",
    description: "Responsive, high-performance websites and applications using modern frameworks like React.",
    icon: Code,
  },
  {
    id: 3,
    title: "Results-Driven Digital Marketing",
    description: "Elevate your brand with comprehensive SEO, PPC, and social media management strategies.",
    icon: BarChart,
  },
  {
    id: 4,
    title: "ERP & CRM Implementation",
    description: "Integrate and optimize enterprise systems that centralize data and improve efficiency.",
    icon: Layers,
  },
  {
    id: 5,
    title: "Business Process Automation",
    description: "Automate repetitive tasks and complex workflows to boost productivity and reduce operational costs.",
    icon: Zap,
  },
  {
    id: 6,
    title: "Cloud Solutions & Migration",
    description: "Seamlessly transition your infrastructure and applications to the cloud for security and scalability.",
    icon: Cloud,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-light">
      <div className="container">
        <SectionTitle
          preTitle="Our Expertise"
          title="Tailored Solutions for Growth"
          description="We combine technical mastery with strategic insight to deliver impactful results across various digital domains."
        />
        <div className="row g-4">
          {detailedServices.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="card h-100 p-4 shadow-sm border-0 service-card">
                <div className="card-body">
                  <service.icon className="text-primary mb-3" size={40} />
                  <h3 className="card-title fs-4 fw-bold mb-3">{service.title}</h3>
                  <p className="card-text text-muted">{service.description}</p>
                  <a href="#" className="text-primary fw-semibold d-inline-flex align-items-center">
                    Learn More <ArrowRight className="ms-1" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Process Section ---
const processSteps = [
  { number: 1, title: "Discovery & Analysis", description: "We begin by deeply understanding your business, challenges, and objectives." },
  {
    number: 2,
    title: "Strategy & Planning",
    description: "We craft a detailed strategy and implementation plan, outlining solutions and timelines.",
  },
  {
    number: 3,
    title: "Development & Customization",
    description: "Our experts build, configure, and customize your solutions, from Zoho to websites.",
  },
  { number: 4, title: "Testing & Deployment", description: "Rigorous testing ensures flawless performance before we launch your new solutions." },
  { number: 5, title: "Training & Support", description: "We offer comprehensive training for your team and continuous support to ensure success." },
  { number: 6, title: "Optimization & Growth", description: "We monitor performance and optimize to ensure sustained growth and success." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <SectionTitle
          preTitle="Our Approach"
          title="A Proven Path to Digital Success"
          description="Our structured methodology ensures transparency, efficiency, and exceptional results at every stage."
        />
        <div className="row g-5">
          {processSteps.map((step) => (
            <div className="col-lg-4 col-md-6" key={step.number}>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div
                    className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle fw-bold fs-4"
                    style={{ width: "4rem", height: "4rem" }}
                  >
                    {`0${step.number}`}
                  </div>
                </div>
                <div className="ms-4">
                  <h3 className="fs-4 fw-bold">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Industries Section ---
const industries = [
  { icon: ShoppingBag, title: "E-commerce & Retail" },
  { icon: Truck, title: "Logistics" },
  { icon: Building2, title: "Real Estate" },
  { icon: HeartHandshake, title: "Non-Profit" },
  { icon: School, title: "Education" },
  { icon: Utensils, title: "Hospitality" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Microscope, title: "Healthcare" },
  { icon: BookOpen, title: "Publishing" },
  { icon: UserCheck, title: "Consulting" },
  { icon: DollarSignIcon, title: "Financial" },
  { icon: HardHat, title: "Construction" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-light">
      <div className="container">
        <SectionTitle
          preTitle="Vertical Expertise"
          title="Industries We Empower"
          description="Our solutions are crafted to address the unique challenges and opportunities within diverse market sectors."
        />
        <div className="row g-4 text-center">
          {industries.map((industry, index) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={index}>
              <div className="card h-100 p-3 shadow-sm border-0">
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <industry.icon className="text-primary mb-3" size={40} />
                  <h5 className="fs-6 fw-semibold">{industry.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Testimonials Section ---
const testimonials = [
  {
    quote: "NekZoho transformed our sales process with Zoho CRM. Their customization was spot-on, and support was exceptional. Highly recommend!",
    name: "Emily R.",
    title: "Marketing Director, Tech Solutions Inc.",
    stars: 5,
  },
  {
    quote: "The new website built by NekZoho is stunning, fast, and incredibly user-friendly. It has significantly boosted our online engagement.",
    name: "David S.",
    title: "CEO, Creative Agency Co.",
    stars: 5,
  },
  {
    quote:
      "Our digital marketing results have never been better. NekZoho's data-driven approach and transparent reporting gave us confidence and a fantastic ROI.",
    name: "Sarah L.",
    title: "Founder, Eco-Wear Brands",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const StarRating = ({ count }) => (
    <div className="text-warning mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`d-inline ${i < count ? "text-warning" : "text-light"}`} fill="currentColor" size={18} />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <SectionTitle preTitle="What Our Clients Say" title="Trusted by Leading Businesses" />
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0 testimonial-card">
                <div className="card-body p-4">
                  <StarRating count={testimonial.stars} />
                  <p className="fs-5 fst-italic text-dark my-3">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.title}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Why Choose Us Section ---
const differentiators = [
  { icon: Award, title: "Zoho Authorized Partner", description: "Certified experts ensuring best practices and optimized solutions." },
  { icon: Brain, title: "Strategic Consulting", description: "Beyond implementation, we provide insights for long-term growth." },
  { icon: CheckCircle, title: "Results-Oriented Approach", description: "Our focus is on delivering measurable outcomes and ROI for your business." },
  { icon: Users, title: "Client-Centric Service", description: "Your success is our priority. We offer dedicated support and communication." },
  { icon: Rocket, title: "Innovative Solutions", description: "Staying ahead with the latest technologies and design trends." },
  { icon: ShieldCheck, title: "Data Security & Integrity", description: "Robust measures to protect your valuable business information." },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-light">
      <div className="container">
        <SectionTitle
          preTitle="Our Edge"
          title="Why Partner with NekZoho?"
          description="We are committed to delivering excellence, innovation, and measurable value to every client."
        />
        <div className="row g-4">
          {differentiators.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <div className="icon-shape">
                    <item.icon size={32} />
                  </div>
                </div>
                <div className="ms-4">
                  <h3 className="fs-4 fw-bold">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Blog Section (FIXED) ---
const blogPosts = [
  {
    id: 1,
    title: "5 Ways Zoho CRM Can Revolutionize Your Sales Funnel",
    date: "Oct 26, 2024",
    image: blogImage1,
    link: "#",
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2025",
    date: "Oct 20, 2024",
    image: blogImage2,
    link: "#",
  },
  {
    id: 3,
    title: "Maximizing ROI with Targeted Digital Marketing",
    date: "Oct 15, 2024",
    image: blogImage3,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <SectionTitle
          preTitle="Latest Insights"
          title="Our Blog & Resources"
          description="Stay informed with expert articles, industry news, and valuable tips from the NekZoho team."
        />
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div className="col-lg-4" key={post.id}>
              <div className="card h-100 shadow-sm border-0 service-card overflow-hidden">
                <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body p-4">
                  <p className="text-muted small mb-2">{post.date}</p>
                  <h3 className="card-title fs-5 fw-bold mb-3">{post.title}</h3>
                  <a href={post.link} className="text-primary fw-semibold d-inline-flex align-itemsD-center">
                    Read Article <ArrowRight className="ms-1" size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: CTA Section ---
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
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-5 py-3">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component: Footer ---
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-1 pb-5">
      <div className="container">
        <hr className="border-white-50" />
        <div className="row g-4 pt-5 pb-4">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-12">
            <a className="navbar-brand fw-bold fs-2 text-white" href="#">
              Nek<span className="text-white-50">Zoho</span>
            </a>
            <p className="text-white-50 my-3">Empowering businesses through Zoho, Web Development, and Digital Marketing solutions.</p>
            <div className="d-flex">
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
              {["Home", "About Us", "Services", "Blog", "Contact"].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none hover-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h5 className="fw-bold text-white mb-3">Our Services</h5>
            <ul className="list-unstyled">
              {["Zoho Consulting", "Web Development", "Digital Marketing", "CRM/ERP", "Automation"].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#services" className="text-white-50 text-decoration-none hover-primary">
                    {item}
                  </a>
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

// --- Main App Component (MUST BE LAST) ---
export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

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
document.head.appendChild(style);
