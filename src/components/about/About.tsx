import React from "react";
import "./about.css";
import imgAbout from "../../assets/img-about.png";
import desIcon1 from "../../assets/img-desc1.png";
import desIcon2 from "../../assets/img-desc2.png";
import desImg from "../../assets/imgdesc3.png";
const About = () => {
  return (
    <section id="#about" className="about__container about">
      <div className="about-content">
        <div className="content-left">
          <div>
            <p>Hello there</p>
          </div>
          <div>I am</div>
        </div>
        <div className="content-right">
          <img src={imgAbout} alt="" />
          <p>Giang</p>
        </div>
      </div>
      <div className="about-text">
        I am a Product Illustrator, Visual Designer and Art Director and
        currently working as a Brand Designer at Stark.
      </div>
      <div className="about-description">
        <div className="description-text">
          <img src={desIcon2} alt="" />
          <p>I help brands to create compelling stories with visual design.</p>
        </div>
        <div className="description-img">
          <img src={desIcon1} alt="" />
          <img src={desImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
