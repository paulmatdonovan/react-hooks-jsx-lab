import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <h3>I'm an aspiring web developer. I have an eye for detail whislt also making the most of the technical side of your website to ensure an outstanding customer experiecne.</h3>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
