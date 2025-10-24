import SectionTitle from "./SectionTitle";
import { Star } from "lucide-react";

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

const StarRating = ({ count }) => (
  <div className="text-warning mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`d-inline ${i < count ? "text-warning" : "text-light"}`} fill="currentColor" size={18} />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <SectionTitle preTitle="What Our Clients Say" title="Trusted by Leading Businesses" />
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0 testimonial-card">
                <div className="card-body p-4 d-flex flex-column">
                  {" "}
                  {/* Added flex-column */}
                  <StarRating count={testimonial.stars} />
                  <p className="fs-5 fst-italic text-dark my-3 flex-grow-1">"{testimonial.quote}"</p> {/* Added flex-grow-1 */}
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

export default TestimonialsSection;
