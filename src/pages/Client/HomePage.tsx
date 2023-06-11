import React from "react";
import About from "../../components/about/About";
import Slide from "../../components/Slider/Slider";
import Project from "../../components/project/Project";
import Skill from "../../components/skill/Skill";
import Contact from "../../components/contact/Contact";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <About />
      <Slide />
      <Project />
      <Skill />
    </>
  );
};

export default HomePage;
