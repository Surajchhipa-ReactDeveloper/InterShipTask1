import React, { useState } from "react";
import "./Review.css";
import ReviewData from "./ReviewData.js";
const Review = () => {
  const [reView, setReView] = useState(ReviewData);
  return (
    <>
      <div className="Review_Container">
        {reView.map((Item, index) => {
          const { Rating, Name, ReviewMassage, Date, ReviewProfile } = Item;
          return (
            <>
              <div className="ReView_Main_Container">
                <div className="Review_User_Profile_And_Name_Data_Container">
                  <div className="Profile_And_Name_Left_Side_Container">
                    <div className="User_Profile_Container2">
                      <img
                        src={ReviewProfile}
                        alt=""
                        className="ReviewProfile"
                      />
                    </div>
                    <div className="User_Name_And_Rating">
                      <p className="ReviewUserName">{Name}</p>
                      <p className="Rating">{Rating}</p>
                    </div>
                  </div>
                  <div className="Review_Date_Right_Side_Container">
                    <p className="Date">{Date}</p>
                  </div>
                </div>
                <div className="User_Review_Box">
                  <p className="UserReview">{ReviewMassage}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Review;
