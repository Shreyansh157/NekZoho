import SectionTitle from "./SectionTitle";
import { Award, Brain, CheckCircle, Users, Rocket, ShieldCheck } from "lucide-react";

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

export default WhyChooseUsSection;
