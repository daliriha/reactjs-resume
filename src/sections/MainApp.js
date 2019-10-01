import React, { Component } from "react";

import TitleSection from "./TitleSection";
import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";
import NavSection from "./NavSection";

import "./MainApp.css";

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = { random: 0 };
  }
  colorHandler = () => {
    const min = 0;
    const max = 4;
    const rand = Math.floor(Math.random() * (max - min + 1) + min);
    this.setState({ random: rand });
  };

  render() {
    return (
      <div className={`App bg-theme-${this.state.random}`}>
        <NavSection colorHandler={this.colorHandler} />
        <TitleSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default MainApp;
