import React from "react";
import "../project/Project.css";
import rope1 from "../../assets/img-project1.png";
import rope2 from "../../assets/img-project2.png";
import img2 from "../../assets/imgProject2.webp";
import { Rate } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
type Props = {};
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
const Project = (props: Props) => {
  return (
    <section className="project__container project">
      <div className="project-title">Project</div>
      <div data-aos="fade-right" className="project">
        <div className="project__content">
          <img className="rope" src={rope1} alt="" />
          <div className="project__content-left">
            <p className="project-name">
              <p>Name</p>
              <p>Dự án 1</p>
            </p>
            <p className="project-name">
              <p>Date</p>
              <p>Dự án 1</p>
            </p>
            <p className="project-name">
              <p>Cate</p>
              <p>Dự án 1</p>
            </p>
            <p className="project-name">
              <p>Link</p>
              <p>Dự án 1</p>
            </p>
            <Rate defaultValue={2} />
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eveniet ad nihil illo eum quas. Quibusdam quae quidem
              aliquam, praesentium eveniet ullam, ipsam voluptatem assumenda,
              rerum molestias velit unde voluptates!
            </p>
          </div>
          <div className="project__content-right">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="project aos-init aos-animate">
        <div className="project__content">
          <img className="rope" src={rope2} alt="" />
          <div className="project__content-left">
            <p className="project-name">
              <p>Name</p>
              <p>Dự án 1</p>
            </p>
            <p className="project-name">
              <p>Date</p>
              <p>Dự án 1</p>
            </p>
            <p className="project-name">
              <p>Cate</p>
              <p>Dự án 1</p>
            </p>
            <p className="project-name">
              <p>Link</p>
              <p>Dự án 1</p>
            </p>
            <Rate defaultValue={2} />
            <p className="project-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eveniet ad nihil illo eum quas. Quibusdam quae quidem
              aliquam, praesentium eveniet ullam, ipsam voluptatem assumenda,
              rerum molestias velit unde voluptates!
            </p>
          </div>
          <div className="project__content-right">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
