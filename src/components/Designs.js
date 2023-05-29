import React from "react";

function designs() {
  const designsimg = [
    "gal-img1.jpg",
    "gal-img2.jpg",
    "gal-img3.jpg",
    "gal-img4.jpg",
    "gal-img5.jpg",
  ];

  return (
    <>
      <div id="designs-section" className="designs-bg">
        <div className="content-container designs-content">
          <div className="designs-desc">
            <h3>Designs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              efficitur commodo mi, ac cursus metus laoreet ac.
            </p>
          </div>
          <div className="designs-gallery">
            {designsimg.map((design, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={require(`../images/${design}`)}
                  alt={`Design ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default designs;
