import "./about.scss";
import { FaAngleRight } from "react-icons/fa";
import { FaCode, FaDesktop, FaDollarSign, FaServer } from "react-icons/fa6";

const details = {
  title: "Hello! I’m Munish Halai.",
  description:
    "I have rich experience in front-end, back-end, database management, and API integration. I love to talk with you about my unique web solutions.",
  labels: [
    { name: "Age", value: (() => new Date().getFullYear() - 1998)() },
    { name: "Residence", value: "India" },
    { name: "Freelance", value: "Available" },
    { name: "Address", value: "Mumbai, India" },
  ],
  services: [
    {
      name: "UI/UX Development",
      description:
        "A modern, mobile-ready website to enhance your marketing. I focus on creating intuitive and engaging user experiences that captivate visitors and drive conversions.",
      icon: <FaCode />,
    },
    {
      name: "Web & Backend Applications",
      description:
        "Robust web applications and backend systems to support your business. I create efficient APIs and scalable architectures that ensure seamless performance.",
      icon: <FaServer />,
    },
    // {
    //   name: "Comprehensive SEO Solutions",
    //   description:
    //     "Comprehensive SEO strategies to improve your online visibility. I focus on keyword research, on-page optimization, and link building to drive targeted traffic to your website.",
    //   icon: <FaCogs />,
    // },
  ],
};

const whatsAppDetails = {
  url: "https://wa.me/+919833631091?text=",
  message: {
    essentialWebPackage:
      "I am interested in Essential Web Presence Service. Please provide more details.",
    dynamicWebApplicationPackage:
      "I am interested in Dynamic Web Application Service. Please provide more details.",
  },
};

export default function About({ classNames }: { classNames: string[] }) {
  return (
    <div className={`page ${classNames}`}>
      <div className="section">
        <p className="title">About Me</p>
        <div className="content">
          <p className="column description">
            <strong>{details.title}</strong>
            <br /> {details.description}
          </p>
          <div className="column">
            {details.labels.map((label) => {
              return (
                <div className="label" key={label.name}>
                  <p className="property">{label.name}:</p>
                  <p className="value">{label.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="title">My Services</h2>
        <div className="content">
          {details.services.map((service) => {
            return (
              <div className="column service" key={service.name}>
                <div className="service_icon">{service.icon}</div>
                <h3 className="sub_title">{service.name}</h3>
                <p className="description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section">
        <h2 className="title">Pricing</h2>
        <div className="content">
          <div className="column pricing">
            <div className="pricing_icon">
              <FaDesktop />
              <p className="sub_title">Essential Web Presence</p>
            </div>
            <p className="price">
              <FaDollarSign />
              15 <span>hour</span>
            </p>
            <ul className="package_features">
              {/* <li>A polished online presence</li> */}
              <li>UI/UX design for up to 5 pages</li>
              <li>Responsive front-end development</li>
              <li>Basic SEO setup</li>
              <li>
                Revisions <span>1 round</span>
              </li>
              <li>
                Delivery Time <span>3 weeks</span>
              </li>
            </ul>
            <a
              className="link order"
              href={
                whatsAppDetails.url +
                whatsAppDetails.message.essentialWebPackage
              }
              target="_blank"
            >
              Order Now
              <FaAngleRight />
            </a>
          </div>
          <div className="column pricing">
            <div className="pricing_icon">
              <FaCode />
              <p className="sub_title">Dynamic Web Application</p>
            </div>
            <p className="price">
              <FaDollarSign />
              30 <span>hour</span>
            </p>
            <ul className="package_features">
              <li>UI/UX design for user engagement</li>
              <li>Full-stack development</li>
              <li>API integration</li>
              <li>Database setup</li>
              <li>
                Delivery Time <span>5 weeks</span>
              </li>
            </ul>
            <a
              className="link order"
              href={
                whatsAppDetails.url +
                whatsAppDetails.message.dynamicWebApplicationPackage
              }
              target="_blank"
            >
              Order Now
              <FaAngleRight />
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="title">Clients</h2>
        <div className="content">
  <div className="column clients">
      <img src="/assets/images/clients/kipsrestaurants_logo.png" alt="Kips Restaurants Logo" />
  </div>
  <div className="column clients">
      <img src="/assets/images/clients/toproof_logo.png" alt="Top Roof Logo" />
  </div>
  <div className="column clients">
      <img src="/assets/images/clients/pipeit_mw_logo.jpg" alt="Pipeit MW Logo" />
  </div>
  <div className="column clients">
      <img src="/assets/images/clients/harfield_investments_logo.png" alt="Harfield Investments Logo" />
  </div>
</div>
      </div>

      {/* <div className="section">
        <h2 className="title">Fun Facts</h2>
        <div className="content">
          <div className="column fun_facts">
            <FaCompactDisc />
            <p>80 Albums listened</p>
          </div>
          <div className="column fun_facts">
            <FaTrophy />
            <p>80 Albums listened</p>
          </div>
          <div className="column fun_facts">
            <FaGlobe />
            <p>Launched 25+ websites</p>
          </div>
          <div className="column fun_facts">
            <FaCat />
            <p>Cat Lover</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
