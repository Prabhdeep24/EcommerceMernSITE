import React, { Fragment } from "react";
import "../../App.css";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        <div className="leftFooter">
          <h4>Welcome !</h4>
          <p>--</p>
        </div>

        <div className="midFooter">
          <h1>Prabh-Ecommerce</h1>
          <p>| High Quality Is Our First Priority |</p>

          <p>Shopping Cart - 2020-2021, All Rights Reserved</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="http://instagram.com/">Instagram</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
