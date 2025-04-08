import { useState } from "react";
import "./contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="header">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for any inquiries</p>
        </div>

        <div className="content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Office Location</h3>
              <p>123 Real Estate Street</p>
              <p>Miami, FL 33139</p>
              <p>United States</p>
            </div>

            <div className="info-card">
              <h3>Contact Details</h3>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@urbanaxis.com</p>
              <p>Hours: Mon-Fri 9:00 AM - 6:00 PM</p>
            </div>

            <div className="info-card">
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.9024424301397!2d-80.1301234!3d25.7616798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9d6823f5b530f%3A0x8d8611ed8d5f1b!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1647123456789!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
