import React from "react";
import "../style/footerComp.scss";
import CodeBroLogo from "./CodeBroLogo";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer__container bd-container">
        <CodeBroLogo />
        <p className="footer__description">
          Leverage your coding skills with CodeBro
        </p>

        <p className="footer__copy">CodeBro made with ❤️</p>
      </div>
    </footer>
  );
};

export default FooterComp;
