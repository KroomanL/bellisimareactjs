import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function contact() {
  return (
    <>
      <div id="contact-section" className="contact-bg">
        <div className="content-container contact-content">
          <div className="contact-heading">
            <h3>Contact Us</h3>
          </div>
          <div className="contact-main">
            <div className="contact-info">
              <table>
                <tbody>
                  <tr className="contact-address">
                    <td>
                      <h6>Address</h6>
                    </td>
                    <td>
                      321 Assumption Rd., Baguio City, Benguet, Philippines,
                      2600
                    </td>
                  </tr>
                  <tr className="contact-phone">
                    <td>
                      <h6>Phone</h6>
                    </td>
                    <td>0912-345-3223</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Social</h6>
                    </td>
                    <td>
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        size="xl"
                        className="fb-icon"
                      />
                      @facebook-page
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contact-form">
              <form action="" method="">
                <div className="contact-form-input">
                  <input name="firstname" placeholder="First Name" required />
                  <input name="lastname" placeholder="Last Name" required />
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input name="phone" placeholder="Phone" type="tel" required />
                </div>
                <div className="contact-form-textarea">
                  <textarea
                    name="message"
                    placeholder="Message"
                    type="textarea"
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="contact-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default contact;
