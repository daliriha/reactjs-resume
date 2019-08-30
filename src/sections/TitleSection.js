import React, { Component } from "react";

import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import Arrow from "../components/Arrow";
import { Link, Element } from "react-scroll";

import "./TitleSection.css";

class TitleSection extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Fullpage className="section1">
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <div>
            {Object.keys(data.links).map(key => {
              return (
                <SocialIcon
                  network={key}
                  className="icons"
                  fgColor="#fff"
                  bgColor="#000"
                />
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <Arrow icon={data.icons.down} />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitleSection;
