import { useNavigationContext } from "@/app/shared/context/navigationState";
import "./navbar.scss";

import { FaUserTie } from "react-icons/fa";
import { FaList, FaNewspaper, FaPaperPlane, FaSuitcase } from "react-icons/fa6";
import { useCallback } from "react";
import {
  NavAction,
  NavLabel,
} from "@/app/shared/context/navigationState.model";

interface NavbarProps {
  onScrollToContent: () => void;
}

const NavLinks = {
  [NavLabel.About]: <FaUserTie />,
  [NavLabel.Resume]: <FaList />,
  [NavLabel.Works]: <FaSuitcase />,
  [NavLabel.Blog]: <FaNewspaper />,
  [NavLabel.Contact]: <FaPaperPlane />,
};

const Navbar: React.FC<NavbarProps> = function ({ onScrollToContent }) {
  const navigationContext = useNavigationContext();

  const handlePageChange = (pageName: NavLabel) => {
    navigationContext?.dispatch({
      type: NavAction.SET_ACTIVE_DIV,
      payload: pageName,
    });

    onScrollToContent();
  };
  return (
    <nav>
      <div className="top">
        <div className="bar"></div>
      </div>
      <ul id="navlinks">
        {Object.keys(NavLinks).map((link) => {
          return (
            <li key={link}>
              <a
                className={`link ${
                  navigationContext?.state.activePage === link && "active"
                }`}
                onClick={() => handlePageChange(link as NavLabel)}
              >
                {NavLinks[link as keyof typeof NavLinks]}
              </a>
              <p>{link}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
