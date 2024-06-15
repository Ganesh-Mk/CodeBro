import React from "react";
import "../style/footerComp.scss";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer__container bd-container">
        <div className="logoContainer">
          <span className="logo">&lt;&nbsp;</span>
          <span className="logo code">Code</span>
          <span className="logo">Bro</span>
          <span className="logo">&nbsp;&frasl;&gt;</span>
        </div>
        <p className="footer__description">
          Leverage your coding skills with CodeBro
        </p>

        <p className="footer__copy">CodeBro made with ❤️</p>
      </div>
    </footer>
  );
};

export default FooterComp;
