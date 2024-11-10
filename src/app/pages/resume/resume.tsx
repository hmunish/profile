import "./resume.scss";
import { FaHandPointRight, FaUniversity } from "react-icons/fa";
import {
  FaBriefcase,
  FaCheck,
  FaChevronRight,
  FaCircleRight,
  FaCode,
  FaFlag,
  FaList,
  FaUser,
} from "react-icons/fa6";

const experiences = [
  {
    position: "Software Engineer",
    company: "Fourth Pointer Services Pvt Ltd",
    description:
      "Develop and maintain dynamic, scalable web applications using AngularJS, NestJS, and Laravel, focusing on creating responsive user interfaces, optimizing backend functionality, and ensuring seamless integration across platforms.",
    startYear: 2024,
  },
  {
    position: "Website Developer",
    company: "Self Employed (Freelance)",
    description:
      "Built strong, lasting relationships with customers by consistently delivering high-quality solutions tailored to their needs. Developed a variety of front-end websites, custom WordPress sites, and digital advertising campaigns using videos and Google Ads. Utilized HTML, CSS, JavaScript, PHP, WordPress, SEO, and Google Ads to create impactful websites and marketing strategies that align with client goals and drive engagement.",
    startYear: 2023,
    endYear: 2024,
  },
];

const educations = [
  {
    course: "Full-Stack Web Development (MERN Stack)",
    institute: "Sharpener",
    description:
      "Gained hands-on experience in building and deploying end-to-end web applications using MongoDB, Express, React, and Node.js.",
    startYear: "2023",
    endYear: "2024",
  },
  {
    course: "Remote Full-Stack Web Development (React + Ruby on Rails)",
    institute: "Microverse",
    description:
      "Spent 1300+ hours mastering algorithms, data structures, and full-stack development with Ruby, Rails, JavaScript, React, and Redux.",
    startYear: "2023",
    endYear: "2024",
  },
  {
    course: "Bachelor of Science (Information Technology)",
    institute: "ISBM University",
    description:
      "My education helped build a strong foundation and professional discipline, allowing me to continue developing global skills for the fastest-growing tech companies.",
    startYear: "2019",
    endYear: "2023",
  },
];

const professional = [
  {
    name: "Team Collaboration",
    value: 90,
  },
  {
    name: "Attention to Detail",
    value: 85,
  },
  {
    name: "Adaptibility",
    value: 90,
  },
];

const languages = [
  {
    name: "English",
    value: 9,
  },
  {
    name: "Hindi",
    value: 9,
  },
  {
    name: "Marathi",
    value: 7,
  },
];

const knowledges = [
  "Software Development Life Cycle (SDLC)",
  "System Architecture & Design",
  "Software Design Patterns",
  "UML & ERD Diagrams",
  "Test-Driven Development (TDD)",
  "Git Version Control",
  "CI/CD Pipelines",
  "Remote Collaboration",
];

const coding = [
  {
    name: "HTML/CSS",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 90,
  },
  {
    name: "AngularJS",
    value: 75,
  },
  {
    name: "NestJS",
    value: 85,
  },
];

export default function Resume({ classNames }: { classNames: string[] }) {
  return (
    <div className={`page ${classNames}`}>
      <div className="section">
        <p className="title">Resume</p>
        <div className="content timeline">
          <div className="column resume_title">
            <p className="sub_title resume">
              <FaBriefcase />
              Experience
            </p>
          </div>
          <div className="column resume_title">
            <p className="sub_title resume">
              <FaUniversity />
              Education
            </p>
          </div>
          <div className="column resume">
            {experiences.map((work) => {
              return (
                <div key={work.startYear + work.position}>
                  <p className={`duration ${work.endYear || "active"}`}>{`${
                    work.startYear
                  } - ${work.endYear || "Present"}`}</p>
                  <div>
                    <p className="sub_title">{work.position}</p>
                    <p className="institution_name">{work.company}</p>
                  </div>
                  <p className="description">{work.description}</p>
                </div>
              );
            })}
          </div>
          <div className="column resume">
            {educations.map((course) => {
              return (
                <div key={course.startYear + course.course}>
                  <p className={`duration ${course.endYear || "active"}`}>{`${
                    course.startYear
                  } - ${course.endYear || "Present"}`}</p>
                  <div>
                    <p className="sub_title">{course.course}</p>
                    <p className="institution_name">{course.institute}</p>
                  </div>
                  <p className="description">{course.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section">
        <p className="title">Skills</p>
        <div className="content skills">
          <div className="column resume_title">
            <p className="sub_title resume">
              <FaUser />
              Professional
            </p>
          </div>
          <div className="column resume_title">
            <p className="sub_title resume">
              <FaFlag />
              Languages
            </p>
          </div>
          <div className="column skills">
            {professional.map((skill) => {
              return (
                <div key={skill.name} className="detail_wrap">
                  <p>{skill.name}</p>
                  <div className="value_bar">
                    <div
                      style={{
                        width: `${skill.value}%`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="column skills">
            {languages.map((language) => {
              return (
                <div key={language.name} className="detail_wrap">
                  <p>{language.name}</p>
                  <div className="dot_bar">
                    {Array.from({ length: 10 }, (_, index) => (
                      <div
                        key={index}
                        className={`dot ${
                          index < language.value ? "fill" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="column resume_title">
            <p className="sub_title resume">
              <FaCode />
              Code
            </p>
          </div>
          <div className="column resume_title">
            <p className="sub_title resume">
              <FaList />
              Knowledge
            </p>
          </div>
          <div className="column skills coding">
            {coding.map((skill) => {
              return (
                <div key={skill.name} className="detail_wrap">
                  <div
                    className="round_bar"
                    style={{
                      background: `conic-gradient(var(--primary-color) 0% ${skill.value}%, var(--color-5) ${skill.value}% 100%)`,
                    }}
                  >
                    <div>
                      <p>{skill.value}%</p>
                    </div>
                  </div>
                  <p>{skill.name}</p>
                </div>
              );
            })}
          </div>
          <div className="column skills">
            <ul className="knowledges">
              {knowledges.map((knowledge) => {
                return (
                  <li key={knowledge}>
                    <FaCheck />
                    {knowledge}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
