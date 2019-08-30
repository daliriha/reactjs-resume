import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import data from "../data.json";
import Arrow from "../components/Arrow";
import { Link, Element } from "react-scroll";

import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Fullpage className="section3">
          <h2>{data.sections[1].title}</h2>
          <div className="cards-wrapper">
            {data.sections[1].items.map(skillItem => {
              return <SkillCard skill={skillItem} />;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <Arrow icon={data.icons.up} />
        </Link>
      </div>
    );
  }
}

export default SkillSection;
