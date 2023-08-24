import React, { useState } from "react";
import "./Menu.css";
import FoodType from "../../Common/MenuItem/FoodType";
import { Icon } from "../../Contstant/IconPath";

const SortData = [
  {
    id: 1,
    Type: "Recommended",
  },
  {
    id: 2,
    Type: "MOMOS",
  },
  {
    id: 1,
    Type: "PIZZA'S",
  },
];
const Menu = () => {
  const [isActive, setIsActive] = useState(2);
  const [currentValue, setCurrentValue] = useState();
  const ChangeOrderSort = (index, Type) => {
    setCurrentValue(Type)
    switch (Type) {
      case "Recommended": {
        setIsActive(index);
        break;
      }
      case "MOMOS": {
        setIsActive(index);
        break;
      }
      case "PIZZA'S": {
        setIsActive(index);
        break;
      }
      default:
        break;
    }
  };
  return (
    <>
      <div className="Menu_Page_Main_Container">
        <div className="Menu_Page_Top_Container">
          <div className="Menu_Page_Search_Bar_And_Back_Button_Container">
            <div className="Back_Button">
              <img src={Icon.BackArrow} alt="" className="BackPageArrow" />
            </div>
            <div className="Search_Button">
              <div className="Input_From_User">
                <input
                  type="text"
                  placeholder="Search for food"
                  className="Input"
                />
              </div>
              <div className="Search_Icon">
                <img src={Icon.Search} alt="" className="SearchIcon" />
              </div>
            </div>
          </div>
          <div className="Menu_List_Top_Button">
            {SortData.map((item, index) => (
              <div className="SortTing_Main_Container" key={index}>
                <div
                  key={item.id + index}
                  className={`Sort_Type  ${
                    isActive === index ? "activeSortBtn" : ""
                  }`}
                  onClick={() => ChangeOrderSort(index, item.Type)}
                >
                  {item.Type}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="Menu_Page_Recommended_Container">
          <FoodType
            // Value
            FName={"Recommended"}
            PresentItem={"0"}
            NextPartOpen={false}
            isActive={currentValue === "Recommended"}
          />
        </div>
        <div className="Menu_Page_MOmos_Container">
          <FoodType
            NextPartOpen={true}
            FName={"MOMOS"}
            PresentItem={"1"}
            FCategory={Icon.VagLogo}
            FPrice={"270"}
            FTitle={"Momos platter"}
            isActive={currentValue === "MOMOS"}
          />
        </div>
        <div className="Menu_Page_Pizza_Container">
          <FoodType
            NextPartOpen={true}
            FName={"PIZZA'S"}
            PresentItem={"1"}
            FCategory={Icon.VagLogo}
            FPrice={"210"}
            FTitle={"All time margherita 8 inch"}
            isActive={currentValue === "PIZZA'S"}
          />
        </div>
        <div className="Footer">
          <div className="Footer_Left_Container">
            <img src={Icon.MainLogo} alt="" className="MainLogo" />
            <p> Join Eats Wishlist</p>
          </div>
          <div className="Footer_Right_Container">
            <button>Pre-register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
