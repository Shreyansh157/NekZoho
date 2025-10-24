import SectionTitle from "./SectionTitle";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import blogImage1 from "../assets/blog-image-1.jpg";
import blogImage2 from "../assets/blog-image-2.jpg";
import blogImage3 from "../assets/blog-image-3.jpg";

// Add the 'link' property matching the route pattern
const blogPosts = [
  { id: 1, title: "5 Ways Zoho CRM Can Revolutionize Your Sales Funnel", date: "Oct 26, 2024", image: blogImage1, link: "/blog/1" },
  { id: 2, title: "The Future of Web Development: Trends to Watch in 2025", date: "Oct 20, 2024", image: blogImage2, link: "/blog/2" },
  { id: 3, title: "Maximizing ROI with Targeted Digital Marketing", date: "Oct 15, 2024", image: blogImage3, link: "/blog/3" },
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
              {/* Changed outer <a> to <div>, Link is now inside */}
              <div className="card h-100 shadow-sm border-0 service-card overflow-hidden">
                <Link to={post.link}>
                  {" "}
                  {/* Link wrapping image */}
                  <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "200px", objectFit: "cover" }} />
                </Link>
                <div className="card-body p-4 d-flex flex-column">
                  <p className="text-muted small mb-2">{post.date}</p>
                  {/* Link wrapping title */}
                  <h3 className="card-title fs-5 fw-bold mb-3">
                    <Link to={post.link} className="text-dark text-decoration-none hover-primary">
                      {post.title}
                    </Link>
                  </h3>
                  {/* Changed <a> to <Link> */}
                  <Link to={post.link} className="text-primary fw-semibold d-inline-flex align-items-center mt-auto text-decoration-none">
                    Read Article <ArrowRight className="ms-1" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add helper style if not already present globally
const style = document.createElement("style");
style.innerHTML = `
.hover-primary:hover {
  color: var(--bs-primary) !important;
}
`;
if (!document.head.querySelector('style[data-style-helper="footer-contact"]')) {
  style.setAttribute("data-style-helper", "footer-contact");
  document.head.appendChild(style);
}

export default BlogSection;
