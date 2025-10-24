import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle"; // Reusable title
import FadeInSection from "../components/FadeInSection"; // Animation

// --- Placeholder Blog Data (Move this to a data file or API later) ---
import blogImage1 from "../assets/blog-image-1.jpg";
import blogImage2 from "../assets/blog-image-2.jpg";
import blogImage3 from "../assets/blog-image-3.jpg";

const blogPostsData = [
  {
    id: 1,
    title: "5 Ways Zoho CRM Can Revolutionize Your Sales Funnel",
    date: "Oct 26, 2024",
    image: blogImage1,
    content: `
      <p class="lead mb-4">Zoho CRM is a powerful tool, but are you using it to its full potential? This post explores five key strategies to optimize your sales funnel.</p>
      <h3 class="fw-bold fs-4 mb-3">1. Lead Scoring Automation</h3>
      <p class="mb-4">Automatically score leads based on demographics, engagement, and behavior. Focus your sales team's efforts on the most promising prospects, increasing efficiency and conversion rates.</p>
      <h3 class="fw-bold fs-4 mb-3">2. Workflow Automation</h3>
      <p class="mb-4">Automate follow-up emails, task assignments, and record updates. Ensure no lead falls through the cracks and keep your sales process moving smoothly without manual intervention.</p>
      <h3 class="fw-bold fs-4 mb-3">3. Sales Forecasting</h3>
      <p class="mb-4">Leverage Zoho's analytics to predict future sales based on historical data and pipeline status. Make more informed business decisions and set realistic targets.</p>
      <h3 class="fw-bold fs-4 mb-3">4. Integration Capabilities</h3>
      <p class="mb-4">Connect Zoho CRM with other tools like marketing automation platforms, help desks, and accounting software for a unified view of your customer interactions.</p>
      <h3 class="fw-bold fs-4 mb-3">5. Performance Analytics</h3>
      <p class="mb-4">Utilize dashboards and reports to track key sales metrics, identify bottlenecks, and measure team performance. Continuously refine your strategy based on real data.</p>
      <p>Implementing these strategies can significantly enhance your sales funnel efficiency and drive revenue growth.</p>
    `,
    link: "/blog/1",
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2025",
    date: "Oct 20, 2024",
    image: blogImage2,
    content: `
      <p class="lead mb-4">The web development landscape is constantly evolving. Staying ahead requires understanding the key trends shaping the future.</p>
      <h3 class="fw-bold fs-4 mb-3">1. AI Integration</h3>
      <p class="mb-4">Artificial intelligence is becoming integral, from AI-powered chatbots and personalized user experiences to AI-assisted coding and automated testing.</p>
      <h3 class="fw-bold fs-4 mb-3">2. Serverless Architecture</h3>
      <p class="mb-4">Moving away from traditional server management, serverless allows developers to focus purely on code while cloud providers handle infrastructure scaling and maintenance.</p>
      <h3 class="fw-bold fs-4 mb-3">3. Progressive Web Apps (PWAs)</h3>
      <p class="mb-4">PWAs continue to bridge the gap between web and native applications, offering offline capabilities, push notifications, and installability directly from the browser.</p>
      <h3 class="fw-bold fs-4 mb-3">4. WebAssembly (Wasm)</h3>
      <p class="mb-4">Wasm enables running high-performance code (like C++, Rust) in the browser, opening doors for complex applications, games, and computationally intensive tasks on the web.</p>
      <h3 class="fw-bold fs-4 mb-3">5. Cybersecurity Focus</h3>
      <p class="mb-4">With increasing threats, security is paramount. Expect more emphasis on secure coding practices, automated vulnerability scanning, and robust authentication methods.</p>
      <p>Adapting to these trends will be crucial for building modern, efficient, and secure web applications in 2025 and beyond.</p>
    `,
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Maximizing ROI with Targeted Digital Marketing",
    date: "Oct 15, 2024",
    image: blogImage3,
    content: `
      <p class="lead mb-4">In today's competitive landscape, a scattergun approach to digital marketing rarely works. Targeting the right audience is key to maximizing return on investment (ROI).</p>
      <h3 class="fw-bold fs-4 mb-3">1. Define Your Ideal Customer Profile (ICP)</h3>
      <p class="mb-4">Understand who your best customers are: their demographics, pain points, motivations, and online behavior. This forms the foundation of all targeting.</p>
      <h3 class="fw-bold fs-4 mb-3">2. Leverage Data Analytics</h3>
      <p class="mb-4">Use tools like Google Analytics, CRM data, and social media insights to understand audience behavior and campaign performance. Identify what's working and refine your strategy.</p>
      <h3 class="fw-bold fs-4 mb-3">3. Utilize Platform Targeting Options</h3>
      <p class="mb-4">Platforms like Google Ads, Facebook, and LinkedIn offer sophisticated targeting based on demographics, interests, behavior, lookalike audiences, and remarketing lists.</p>
      <h3 class="fw-bold fs-4 mb-3">4. Personalize Content and Messaging</h3>
      <p class="mb-4">Tailor your ad copy, landing pages, and email campaigns to resonate with specific audience segments. Personalized messages yield higher engagement and conversion rates.</p>
      <h3 class="fw-bold fs-4 mb-3">5. A/B Testing and Optimization</h3>
      <p class="mb-4">Continuously test different ad creatives, headlines, calls-to-action, and targeting parameters. Optimize based on performance data to improve ROI over time.</p>
      <p>By focusing your efforts on the right audience with the right message, you can significantly improve your digital marketing effectiveness and achieve better ROI.</p>
    `,
    link: "/blog/3",
  },
];
// --- End Placeholder Data ---

const BlogPage = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL
  const post = blogPostsData.find((p) => p.id === parseInt(blogId)); // Find the matching post

  if (!post) {
    return (
      <div className="container section-padding text-center">
        <h2>Blog Post Not Found</h2>
        <p>The blog post you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary rounded-pill px-4">
          Go Back Home
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
                src={post.image}
                alt={post.title}
                className="img-fluid rounded-3 shadow-sm mb-5 w-100"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />

              {/* Blog Post Content */}
              {/* Using dangerouslySetInnerHTML for placeholder HTML content. 
                  In a real app, use a safer method like Markdown rendering. */}
              <div className="blog-content text-dark fs-5" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Back Button */}
              <div className="text-center mt-5">
                <Link to="/" className="btn btn-outline-primary rounded-pill px-4">
                  ← Back to Home
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
