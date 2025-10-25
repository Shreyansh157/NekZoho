// src/components/TeamSection.jsx
import SectionTitle from "./SectionTitle";

// Import image relative to this file's location
import placeholderImage from "../assets/member-pfp.png";

// --- Placeholder Data ---
const teamMembersData = [
  {
    name: "Sweta Verma",
    title: "Head of HR Department",
    bio: "Driving the vision and ensuring client success.",
    image: placeholderImage,
    linkedin: "#", // Placeholder link
  },
  {
    name: "Kripa Shankar Sharan",
    title: "Director of Sales & Marketing",
    bio: "Expert in CRM customization and workflow automation.",
    image: placeholderImage,
    linkedin: "#", // Placeholder link
  },
  {
    name: "Rudra CK",
    title: "IT Department Head",
    bio: "Crafting high-performance, modern web experiences.",
    image: placeholderImage, // Placeholder
    linkedin: "#", // Placeholder link
  },
  {
    name: "Alok Verma",
    title: "Director of Support & Operation",
    bio: "Developing data-driven strategies for online growth.",
    image: placeholderImage, // Placeholder
    linkedin: "#", // Placeholder link
  },
  {
    name: "Prince Agarkar",
    title: "Software Developer",
    bio: "Developing data-driven strategies for online growth.",
    image: placeholderImage, // Placeholder
    linkedin: "#", // Placeholder link
  },
  {
    name: "Mugdha",
    title: "Website Department Lead",
    bio: "Developing data-driven strategies for online growth.",
    image: placeholderImage, // Placeholder
    linkedin: "#", // Placeholder link
  },
  {
    name: "Richa Sinha",
    title: "IT Support Lead",
    bio: "Developing data-driven strategies for online growth.",
    image: placeholderImage, // Placeholder
    linkedin: "#", // Placeholder link
  },
  {
    name: "Rashi Agarwal",
    title: "Graphic Designer  ",
    bio: "Developing data-driven strategies for online growth.",
    image: placeholderImage, // Placeholder
    linkedin: "#", // Placeholder link
  },
];
// --- End Placeholder Data ---

const TeamSection = () => {
  return (
    <section id="team-section" className="section-padding bg-light pb-4">
      {" "}
      {/* Use bg-light for contrast */}
      <div className="container">
        <SectionTitle title="Meet the Team" description="The passionate experts driving NekZoho's success." />
        <div className="row g-4 justify-content-center">
          {teamMembersData.map((member, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="card h-100 text-center shadow border-0 overflow-hidden team-card">
                {/* Team Member Image */}
                <img src={member.image} className="card-img-top team-member-img" alt={member.name} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  {/* Name */}
                  <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                  {/* Title */}
                  <p className="card-text text-primary mb-2">{member.title}</p>
                  {/* Optional: Short Bio */}
                  {/* <p className="card-text text-muted small">{member.bio}</p> */}
                  {/* Optional: LinkedIn Icon/Link */}
                  {/* <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted"><i className="bi bi-linkedin"></i></a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Optional: Add hover effect style ---
const style = document.createElement("style");
style.innerHTML = `
.team-card img {
  transition: transform 0.3s ease;
}
.team-card:hover img {
  transform: scale(1.05);
}
`;
if (!document.head.querySelector('style[data-style-helper="team-hover"]')) {
  style.setAttribute("data-style-helper", "team-hover");
  document.head.appendChild(style);
}
// --- End Optional Style ---

export default TeamSection;
