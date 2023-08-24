import React from "react";
import "./FoodType.css";

const FoodType = ({
  FName,
  FCategory,
  FTitle,
  FPrice,
  PresentItem,
  NextPartOpen,
  isActive,
}) => {
  // const l = ;
  console.log(isActive);
  return (
    <>
      <div className="FoodTypeContainer">
        <div className={`Food_Name ${isActive ? "activeCategory" : ""}`}>
          {FName} ({PresentItem})
        </div>
        {NextPartOpen ? (
          <div className="Food_Details">
            <div className="Food_Category">
              <img src={FCategory} alt="" className="VagLogo" />
            </div>

            <div className="Food_Title">{FTitle}</div>
            <div className="Food_Price">₹{FPrice}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FoodType;
