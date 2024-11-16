import {
  FaDownload,
  FaLinkedin,
  FaMediumM,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";
import "./profile.scss";
import { FaGithub, FaPhone } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useNavigationContext } from "@/app/shared/context/navigationState";
import {
  NavAction,
  NavLabel,
} from "@/app/shared/context/navigationState.model";

interface ProfileProps {
  onScrollToContent: () => void;
}

const socailProfiles = [
  {
    icon: <FaWhatsappSquare />,
    url: "https://wa.me/+919833631091?text=Hi, I am interested in your services. Please provide more details.",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/munish-halai/",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/hmunish5",
  },
  {
    icon: <FaMediumM />,
    url: "https://medium.com/@hmunish5",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/hmunish",
  },
];

const positions = ["Website Developer", "Backend Developer", "UI/UX Developer"];

const Profile: React.FC<ProfileProps> = function ({ onScrollToContent }) {
  const navigationContext = useNavigationContext();

  const handlePageChange = (pageName: NavLabel) => {
    navigationContext?.dispatch({
      type: NavAction.SET_ACTIVE_DIV,
      payload: pageName,
    });

    onScrollToContent();
  };

  return (
    <section id="profile">
      <img src="/assets/images/munish.png" id="profile-img" alt="Munish Halai" />
      <div id="details_wrapper">
        <div id="title_wrapper">
          <h1>Munish Halai</h1>
          <h2>{positions[0]}</h2>
        </div>
        <div id="social_icons_wrapper">
          {socailProfiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              className="link"
              target="_blank"
            >
              {profile.icon}
            </a>
          ))}
        </div>
        <div id="cta-wrapper">
          <a className="link" href="./assets/documents/resume.pdf" target="_blank">
            Download CV <FaDownload />
          </a>
          <a
            className="link"
            onClick={() => handlePageChange(NavLabel.Contact)}
          >
            Contact Me <FaPhone />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
