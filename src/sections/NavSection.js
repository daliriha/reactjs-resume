import React, { Component } from "react";

import { Link, Element } from "react-scroll";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavSection.css";

class NavSection extends Component {
  render() {
    return (
      <div>
        <div className="top-section">
          <div className="change-color">
            <a onClick = {this.props.colorHandler} >
            <FontAwesomeIcon icon={faEdit} /> Change Color
            </a>
          </div>
          <nav>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              Skills
            </Link>
          </nav>
        </div>
        <Element name="top" className="element" />
      </div>
    );
  }
}

export default NavSection;
