import { Link } from "react-router-dom";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="header">
          <h1>About Urban-Axis</h1>
          <p>Your Trusted Platform for Real Estate Solutions</p>
        </div>

        <div className="content">
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              Urban-Axis aims to revolutionize the real estate industry by
              providing a seamless platform for property listings, user
              interactions, and real-time communication between buyers and
              sellers.
            </p>
          </section>

          <section className="features">
            <h2>Key Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Property Listings</h3>
                <p>
                  Browse through a wide range of properties with detailed
                  information and images.
                </p>
              </div>
              <div className="feature-card">
                <h3>Real-time Chat</h3>
                <p>
                  Instant communication between buyers and sellers through our
                  integrated chat system.
                </p>
              </div>
              <div className="feature-card">
                <h3>User Profiles</h3>
                <p>
                  Create and manage your profile to showcase your properties and
                  preferences.
                </p>
              </div>
              <div className="feature-card">
                <h3>Search & Filter</h3>
                <p>
                  Advanced search and filtering options to find your perfect
                  property.
                </p>
              </div>
            </div>
          </section>

          <section className="team">
            <h2>Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <h3>Harsh Patel</h3>
                <p>Lead Developer</p>
              </div>
              <div className="team-member">
                <h3>Team Member 2</h3>
                <p>Frontend Developer</p>
              </div>
              <div className="team-member">
                <h3>Team Member 3</h3>
                <p>Backend Developer</p>
              </div>
            </div>
          </section>

          <section className="contact">
            <h2>Get in Touch</h2>
            <p>Have questions or suggestions? We'd love to hear from you!</p>
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
