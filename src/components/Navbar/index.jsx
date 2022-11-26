import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kira0x1/mikaela-app"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }
}

export default Navbar;
