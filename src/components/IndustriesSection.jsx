import SectionTitle from "./SectionTitle";
import {
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
} from "lucide-react";

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
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 " key={index}>
              <div className="card h-100 p-3 shadow-sm border-0 service-card">
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

export default IndustriesSection;
