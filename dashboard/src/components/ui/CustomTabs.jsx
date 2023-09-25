import { useState } from "react";
import PropTypes from "prop-types";
import "./CustomTabs.css"; // Create a CSS file for custom styling

function CustomTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex, title) => {
    setActiveTab(tabIndex);
    console.log(title);
    // document.getElementById("sub-heading-navbar").innerHTML = title;
    // setSubHeaderTitle(tabIndex);
  };

  return (
    <div className="custom-vertical-tabs-container">
      <div className="custom-vertical-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`custom-vertical-tab ${
              activeTab === index ? "active" : ""
            }`}
            onClick={() => handleTabClick(index, tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="custom-vertical-tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

CustomTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default CustomTabs;
