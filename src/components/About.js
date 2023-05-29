import React from "react";

function about() {
  return (
    <>
      <div id="about-section" className="about-bg">
        <div className="content-container about-content">
          <div className="about-desc">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              semper lorem. Curabitur pharetra ut orci eu viverra. Nullam
              posuere lacus a fermentum tristique. Integer non augue nunc.
              Vestibulum faucibus dui a metus bibendum, nec tincidunt magna
              blandit. Fusce vulputate vehicula vehicula. In sagittis, mauris
              quis hendrerit hendrerit, dui libero sagittis lacus, nec luctus
              lectus risus eget nulla.
            </p>
          </div>
          <div className="owner-quote">
            <p>
              “Curabitur pharetra, eros eu iaculis tincidunt, tortor quam
              pellentesque erat, posuere sollicitudin turpis enim eu dolor.
              Quisque in ipsum facilisis, tempus augue nec, euismod ante.”
            </p>
            <div className="owner-name">
              <h5>Jane Doe</h5>
              <h6>Owner</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default about;
