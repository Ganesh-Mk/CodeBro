import React from "react";
import "../style/footerComp.scss";
import CodeBroLogo from "./CodeBroLogo";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer__container bd-container">
        <CodeBroLogo />
        <p className="footer__description text-[#4b4b4b]">
          Leverage your coding skills with CodeBro
        </p>

        <p className="footer__copy">Made With ❤️ By CodeBro's</p>
      </div>
    </footer>
  );
};

export default FooterComp;
