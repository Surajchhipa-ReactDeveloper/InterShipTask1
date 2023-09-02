import React, { useState } from "react";
import "./Home.css";
import { Icon } from "../../Contstant/IconPath";
import OverView from "../OverView/OverView";
import Review from "../ReView/Review";

const Home = () => {
  const [active, setActive] = useState();
  const [tabName, setTabName] = useState("OverView");
  // const Tab = ["OverView", "Review"];
  const DisplayContent = () => {
    switch (tabName) {
      case "OverView":
        return <OverView />;
      case "Review":
        return <Review />;
    }
  };
    const [activeTab, setActiveTab] = useState("OverView");
    const Tab = ["OverView", "Review"];

    const TabSwitchHandler = (tab) => {
      setActiveTab(tab);
    };
  // const TabSwitchHandler = (Tab) => {
  //   setTabName(Tab);
  // };
  return (
    <>
      <div className="Home_Page_Container">
        <div className="Home_Page_Top_Logo">
          <img src={Icon.PrimeryLogo} alt="" className="MainLogoHome" />
        </div>
        <div className="Home_Page_OverView_And_Reviews_Container">
          {Tab.map((Item, index) => {
            return (
              <>
                <button
                  key={Item}
                  className={`Tab_Link ${
                    activeTab === Item ? "Active_Tab" : ""
                  }`}
                  onClick={() => {
                    TabSwitchHandler(Item);
                  }}
                >
                  {Item}
                </button>
              </>
            );
          })}
        </div>
        {activeTab === "OverView" ? <OverView /> : <Review />}
      </div>
    </>
  );
};

export default Home;
