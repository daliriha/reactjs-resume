import React, { Component } from "react";

import data from "../data.json";
import Fullpage from "../components/Fullpage";
import Arrow from "../components/Arrow";
import { Link, Element } from "react-scroll";

import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Element name="about" className="element" />
        <Fullpage className="section2">
          <h2>{data.sections[0].title}</h2>
          <div>
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <Arrow icon={data.icons.down} />
        </Link>
        <Element name="skills" className="element" />
      </div>
    );
  }
}

export default AboutSection;
