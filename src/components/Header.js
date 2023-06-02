import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/bellisima-logo.png";

function header() {
  return (
    <>
      <div id="header-section" className="header-soc-bg">
        <div className="content-container header-soc-content">
          <a href="">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="xl"
              className="header-soc-icon"
            />
            @facebook-page
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faSquarePhone}
              size="xl"
              className="header-soc-icon border-left-line-white margin-left-8"
            />
            0912-345-3223
          </a>
        </div>
      </div>
      <div id="header-nav-section" className="header-bg">
        <div className="content-container header-nav">
          <a href="#header-section">
            <img src={logo} alt="" />
          </a>
          <input
            type="checkbox"
            id="hamburger-toggle"
            defaultChecked={false}
            onChange={changeval}
            className="hamburger-toggle"
          />
          <label htmlFor="hamburger-toggle" className="hamburger">
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="harburger-bars"
            />
          </label>
          <ul className="main-nav">
            <li>
              <a href="#services-section">Services</a>
            </li>
            <li>
              <a href="#designs-section">Gallery</a>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>
        <ul id="hamburger-main-nav" className="hamburger-main-nav">
          <li>
            <a href="#services-section">Services</a>
          </li>
          <li>
            <a href="#designs-section">Gallery</a>
          </li>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    document.getElementById("header-nav-section").classList.add("sticky");
  } else {
    document.getElementById("header-nav-section").classList.remove("sticky");
  }
});

window.addEventListener("resize", function () {
  var screen = window.innerWidth;
  if (screen > 768) {
    document.getElementById("hamburger-main-nav").style.display = "none";
  }
});

function changeval(checkvalue) {
  var isChecked = checkvalue.target.checked;

  if (isChecked) {
    document.getElementById("hamburger-main-nav").style.display = "block";
  } else {
    document.getElementById("hamburger-main-nav").style.display = "none";
  }
}

export default header;
