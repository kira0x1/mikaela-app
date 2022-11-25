import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <NavLink activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
