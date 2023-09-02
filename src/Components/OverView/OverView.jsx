import React from "react";
import "./OverView.css";
import { Icon } from "../../Contstant/IconPath";

const OverView = () => {
  return (
    <>
      <div className="OverView_Container">
        <div className="User_Profile_Container">
          <div className="Premium_And_User">
            <div className="Premium_Img_Vag_Logo">
              <div className="Premium_Logo">
                <img src={Icon.Primium} alt="" className="PremiumLogo" />
              </div>
              <div className="VegNonVegLogo">
                <img src={Icon.NonVag} alt="" className="VagLogo" />
                <img src={Icon.VagLogo} alt="" className="VagLogo" />
              </div>
            </div>
            <div className="User_Img_And_Name">
              <img src={Icon.UserProfile} alt="" className="UserProfile" />
              <h3 className="Name">Suraj Chhipa</h3>
            </div>
          </div>
          <div className="Cafe_Timing">
            <span>Closed</span> • Closed at 11:00 PM
          </div>
        </div>
        <div className="User_Contact">
          <div className="Location_Container">
            <img src={Icon.Adders} alt="" className="UserAboutLogo" />
            <p className="UserAbout">Bhilwara Sanjay Colony</p>
          </div>
          <div className="Location_Container1">
            <div className="Logo_Item">
              <img src={Icon.Call} alt="" className="UserAboutLogo" />
              <p className="UserAbout">+91-9876543210</p>
            </div>
            <div className="Call_Btn">
              <h5 className="CallBtn">Call</h5>
            </div>
          </div>
          <div className="Location_Container">
            <img src={Icon.Massage} alt="" className="UserAboutLogo" />
            <p className="UserAbout">Suraj@Gmail.com</p>
          </div>
        </div>
        <div className="Product_Admin">
          <h3 className="Production">Production Admin </h3>
          <p className="UserAbout"> Owner</p>
        </div>
      </div>
    </>
  );
};

export default OverView;
