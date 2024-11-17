import { FaArrowRight, FaSpinner } from "react-icons/fa6";
import "./contact.scss";
import { useRef, useState } from "react";

class ValidationError extends Error {
  code?: number;
  context?: string;

  constructor(message: string, code?: number, context?: string) {
    super(message); // Pass the message to the parent Error class
    this.code = code;
    this.context = context;

    // Set the name of the error to be the class name (optional)
    this.name = this.constructor.name;

    // Capture stack trace (optional but useful)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


const details = {
  labels: [
    { name: "Address", value: "Mumbai, India" },
    { name: "Email", value: "contact@munishhalai.com" },
    { name: "Phone", value: "+91 98336 31091" },
    { name: "Freelance", value: "Available" },
  ],
};

export default function Contact({ classNames }: { classNames: string[] }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{ success: boolean | null; message: string }>({
    success: null,
    message: '',
  });

  const currentTimeoutId = useRef<NodeJS.Timeout | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      for(let k in formData){
        if(formData[k as keyof typeof formData]?.trim()?.length < 1){
          throw new ValidationError('Invalid form fields!')
        }
      }
      setIsSubmitting(true);
      const res = await fetch("https://getform.io/f/bnllxoqb", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });
      if(currentTimeoutId.current){
        clearTimeout(currentTimeoutId.current)
      }
      if (!res.ok) {
        throw new Error();
      }
      setStatus({ success: true, message: 'Your message has been sent successfully! I’ll get back to you shortly' });
    } catch(err){
      if (err instanceof ValidationError) {
        setStatus({ success: false, message: err.message });
      } else {
        setStatus({ success: false, message: 'Oops! Something went wrong while sending your message. Please try again later.' });
      }
    } finally {
      setIsSubmitting(false);
      currentTimeoutId.current = setTimeout(() => {
        setStatus({success: null, message: ''})
    }, 3500)
    }
  };


  return (
    <div className={`page ${classNames}`}>
      <div className="section">
        <p className="title">Get in Touch</p>
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
        <p className="title">Contact Form</p>
        <form className="content contact_form" onSubmit={handleSubmit}>
          <div className="column">
          <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="column">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="column message_field">
            <textarea
              rows={7}
              placeholder="Your Message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
        {status.message && (
        <p className={`message ${status.success ? 'success' : 'error'}`}>
          {status.message}
        </p>
      )}
          </div>
          <div className="column">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <FaSpinner className="spin"/> : <>
                Send Message
                <FaArrowRight />
              </>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
