import React from "react";
import logowhite from "../images/bellisima-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="content-container footer-content">
          <div className="footer-content-div footer-heading">
            <div>
              <h4>Working</h4>
              <h4>Hours</h4>
            </div>
          </div>
          <div className="footer-content-div">
            <div className="sched">
              <h5>Monday - Friday</h5>
              <p>11:00 am - 06:00 pm</p>
            </div>
          </div>
          <div className="footer-content-div">
            <div className="sched">
              <h5>Saturday - Sunday</h5>
              <p>12:00 am - 06:00 pm</p>
            </div>
          </div>
          <div className="footer-content-div footer-logo">
            <img src={logowhite} alt="" />
          </div>
        </div>
        <div className="content-container copyright">
          <p className="copyright-content">Bellisima Gowns © 2023</p>
          <a href="" className="copyright-content">
            Privacy Policy
          </a>
        </div>
      </div>

      <button id="back-to-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} size="lg" />
      </button>
    </>
  );
}

window.addEventListener("scroll", function () {
  var scrollPositionbtt =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPositionbtt > 100) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

export default footer;
