import React from "react";
import "../skill/Skill.css";
import Slider from "react-slick";
import imgRope from "../../assets/img-skill.png";
import imgJs from "../../assets/img-js.png";
type Props = {};
const settings = {
  infinite: true,
  speed: 1000,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
const Skill = (props: Props) => {
  return (
    <section className="skill__container skill">
      <div className="skill__title">Skill</div>
      <div className="skill__content">
        <img className="img-role" src={imgRope} alt="" />
        <Slider {...settings}>
          <div className="skill__content-item">
            <div className="item-left">
              <p className="skill-name">JavaScipt</p>
              <p className="skill-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                temporibus ex architecto labore officiis sequi dolore placeat
                molestias culpa suscipit a, quae voluptates quo nisi voluptas
                quas iure beatae rerum.
              </p>
            </div>
            <div className="item-right">
              <img className="skill-img" src={imgJs} alt="" />
            </div>
          </div>
          <div className="skill__content-item">
            <div className="item-left">
              <p className="skill-name">JavaScipt</p>
              <p className="skill-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                temporibus ex architecto labore officiis sequi dolore placeat
                molestias culpa suscipit a, quae voluptates quo nisi voluptas
                quas iure beatae rerum.
              </p>
            </div>
            <div className="item-right">
              <img className="skill-img" src={imgJs} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Skill;
