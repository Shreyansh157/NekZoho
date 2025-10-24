import SectionTitle from "./SectionTitle";

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

export default ProcessSection;
