import { FaArrowRight } from "react-icons/fa6";
import "./contact.scss";

const details = {
  labels: [
    { name: "Address", value: "Mumbai, India" },
    { name: "Email", value: "contact@munishhalai.com" },
    { name: "Phone", value: "+91 98336 31091" },
    { name: "Freelance", value: "Available" },
  ],
};

export default function Contact({ classNames }: { classNames: string[] }) {
  return (
    <div className={`page ${classNames}`}>
      <div className="section">
        <h1 className="title">Get in Touch</h1>
        <div className="content">
          <div className="column map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d723.1458509893432!2d72.84750809099309!3d19.13765842680635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62db9b11f43%3A0xd9845fb37543afbe!2sANNEXE%20BUILDING%2C%20LILLY%20VIEW%2C%20Collectors%20colony%2C%20Momin%20Nagar%2C%20Jogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400102!5e0!3m2!1sen!2sin!4v1730381500197!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          {details.labels.map((label) => {
            return (
              <div
                className="column contact_detail"
                key={label.name + label.value}
              >
                <div className="label">
                  <p className="property">{label.name}:</p>
                  <p className="value">{label.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section">
        <h1 className="title">Contact Form</h1>
        <form className="content contact_form">
          <div className="column">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="column">
            <input
              type="email"
              name="emailId"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="column message_field">
            <textarea
              rows={7}
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
          </div>
          <div className="column">
            <button type="submit">
              Send Message
              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
