// src/pages/BlogPage.jsx
import { useParams, Link } from "react-router-dom";
// Removed SectionTitle import as it's not used here
import FadeInSection from "../components/FadeInSection"; // Animation

// --- NEW: Import blog data from central file ---
import { blogPostsData } from "../data/blogPosts";
// --- Remove image imports and the local blogPostsData array ---

const BlogPage = () => {
  const { blogId } = useParams();
  // Find post using the imported data
  const post = blogPostsData.find((p) => p.id === parseInt(blogId));

  if (!post) {
    return (
      <div className="container section-padding text-center">
        <h2>Blog Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/blogs" className="btn btn-primary rounded-pill px-4">
          {" "}
          {/* Link to Blogs list */}
          View All Blogs
        </Link>
      </div>
    );
  }

  return (
    <FadeInSection>
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Blog Post Header */}
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-dark mb-3">{post.title}</h1>
                <p className="text-muted">{post.date}</p>
              </div>

              {/* Blog Post Image */}
              <img
                src={post.image} // Image comes from imported data
                alt={post.title}
                className="img-fluid rounded-3 shadow-sm mb-5 w-100"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />

              {/* Blog Post Content */}
              <div className="blog-content text-dark fs-5" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Back Button */}
              <div className="text-center mt-5">
                <Link to="/blogs" className="btn btn-outline-primary rounded-pill px-4">
                  {" "}
                  {/* Link back to Blogs list */}← Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default BlogPage;
