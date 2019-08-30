import React from "react";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import NavSection from "./sections/NavSection";

import "./App.css";

function App() {
  return (
    <div className="App">
    

      <NavSection/>
      <TitleSection/>
      <AboutSection/>
      <SkillSection/>
     
      
    </div>
  );
}

export default App;
