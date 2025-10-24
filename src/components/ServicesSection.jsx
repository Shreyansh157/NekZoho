import SectionTitle from "./SectionTitle";
import { LayoutDashboard, Code, BarChart, Layers, Zap, Cloud, ArrowRight } from "lucide-react";

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
                <div className="card-body d-flex flex-column">
                  {" "}
                  {/* Added flex-column */}
                  <service.icon className="text-primary mb-3" size={40} />
                  <h3 className="card-title fs-4 fw-bold mb-3">{service.title}</h3>
                  <p className="card-text text-muted flex-grow-1">{service.description}</p> {/* Added flex-grow-1 */}
                  <a href="#" className="text-primary fw-semibold d-inline-flex align-items-center mt-auto">
                    {" "}
                    {/* Added mt-auto */}
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

export default ServicesSection;
