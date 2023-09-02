import React from "react";
import "../MenuPage/Menu.css";
import { Icon } from "../../Contstant/IconPath";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer_Left_Container">
          <img src={Icon.MainLogo} alt="" className="MainLogo" />
          <p> Join Eats Wishlist</p>
        </div>
        <div className="Footer_Right_Container">
          <button
            className="register"
          
          >
            Pre-register
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
