import React, { Component } from "react";

import { Link, Element } from "react-scroll";
import "./NavSection.css";

class NavSection extends Component {
  render() {
    return (
      <div>
        <Element name="top" className="element" />

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
    );
  }
}

export default NavSection;
