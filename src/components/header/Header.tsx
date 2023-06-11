import React from "react";
import logo from "../../assets/logo.svg";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./header.css";
const Header = () => {
  return (
    <header className=" container__header">
      <div className="header__logo">
        <Link to={"#home"}>
          <img className="img-logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="header__menu">
        <nav>
          <ul className="menu-list">
            <li className="list-item">
              {/* <Link className="menu-item" to={"#about"}>
                About
              </Link> */}
              <Link
                activeClass="active"
                className="menu-item"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                className="menu-item"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                className="menu-item"
                to="skill"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skill
              </Link>
            </li>
            <li className="list-item">
              <Link
                activeClass="active"
                className="menu-item"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
