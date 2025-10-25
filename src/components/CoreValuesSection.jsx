// src/components/CoreValuesSection.jsx
import React from "react";
import { Target, Lightbulb, Users, CheckSquare } from "lucide-react"; // Example Icons
import SectionTitle from "./SectionTitle";

// --- Placeholder Data ---
const coreValuesData = [
  {
    icon: Target,
    title: "Client Success",
    description: "Our primary focus is delivering measurable results and ensuring our clients achieve their business goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly explore new technologies and strategies to provide cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in strong partnerships, working closely with our clients and within our team.",
  },
  {
    icon: CheckSquare,
    title: "Integrity",
    description: "We operate with transparency, honesty, and uphold the highest ethical standards in all our interactions.",
  },
];
// --- End Placeholder Data ---

const CoreValuesSection = () => {
  return (
    <section className="section-padding">
      {" "}
      {/* Use standard padding, no bg-light needed */}
      <div className="container">
        <SectionTitle title="Our Core Values" description="The principles that guide our work and define who we are." />
        <div className="row g-4">
          {coreValuesData.map((value, index) => (
            <div className="col-lg-3 col-md-6 " key={index}>
              <div className="card h-100 text-center shadow-sm border-0 p-4 service-card">
                <div className="card-body ">
                  {/* Icon */}
                  <div className="icon-shape mx-auto mb-4">
                    <value.icon size={32} />
                  </div>
                  {/* Title */}
                  <h3 className="fs-5 fw-bold mb-3">{value.title}</h3>
                  {/* Description */}
                  <p className="text-muted small">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
