import React from "react";
import "../scss/components/_footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__info">
          <p>
            Больше про React вы можете узнать на сайте{" "}
            <a target="_blank" href="/">
              https://reactjs.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
