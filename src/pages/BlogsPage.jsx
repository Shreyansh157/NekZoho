// src/pages/BlogsPage.jsx
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";
import { ArrowRight } from "lucide-react";
import CtaSection from "../components/CtaSection";

// --- NEW: Import blog data from central file ---
import { blogPostsData } from "../data/blogPosts";
// --- Remove image imports and the local blogPostsData array ---

// Reusing the simple PageHeader component
const PageHeader = ({ title, breadcrumb }) => (
  <section className="bg-primary text-white py-5">
    <div className="container text-center">
      <h1 className="display-4 fw-bold text-white">{title}</h1>
      {breadcrumb && <p className="lead text-white-75">{breadcrumb}</p>}
    </div>
  </section>
);

const BlogsPage = () => {
  return (
    <>
      <PageHeader title="Our Blog" breadcrumb="Home / Blog" />

      <FadeInSection>
        <section className="section-padding bg-light-textured-1">
          <div className="container">
            <SectionTitle title="All Our Latest Articles" description="Dive into our expert insights, industry news, and guides." />
            <div className="row g-4">
              {/* Map over the imported blogPostsData */}
              {blogPostsData.map((post) => (
                <div className="col-lg-4 col-md-6" key={post.id}>
                  <div className="card h-100 shadow-sm border-0 service-card overflow-hidden">
                    <Link to={post.link}>
                      <img src={post.image} className="card-img-top" alt={post.title} style={{ height: "200px", objectFit: "cover" }} />
                    </Link>
                    <div className="card-body p-4 d-flex flex-column">
                      <p className="text-muted small mb-2">{post.date}</p>
                      <h3 className="card-title fs-5 fw-bold mb-3">
                        <Link to={post.link} className="text-dark text-decoration-none hover-primary">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                      <Link to={post.link} className="text-primary fw-semibold d-inline-flex align-items-center mt-auto text-decoration-none">
                        Read Article <ArrowRight className="ms-1" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Optional: Pagination or "Load More" button */}
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <CtaSection />
      </FadeInSection>
    </>
  );
};

// Add helper style for hover effect if not already global
const style = document.createElement("style");
style.innerHTML = `
.hover-primary:hover {
  color: var(--bs-primary) !important;
}
`;
if (!document.head.querySelector('style[data-style-helper="hover-primary"]')) {
  style.setAttribute("data-style-helper", "hover-primary");
  document.head.appendChild(style);
}

export default BlogsPage;
