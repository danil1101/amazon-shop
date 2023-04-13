import React from "react";
import "./Select.scss";

function Select() {
  return (
    <div id="select-box">
      <input type="checkbox" className="options-view-button" />
      <div className="select-button">
        <div className="selected-value">
          <span>Select a platform</span>
        </div>
        <div id="chevrons">
          <i className="fas fa-chevron-up"></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div id="options">
        <div className="option">
          <input
            className="s-c top"
            type="radio"
            name="platform"
            value="codepen"
          />
          <input
            className="s-c bottom"
            type="radio"
            name="platform"
            value="codepen"
          />
          <i className="fab fa-codepen"></i>
          <span className="label">CodePen</span>
          <span className="opt-val">CodePen</span>
        </div>
        <div id="option-bg"></div>
      </div>
    </div>
  );
}

export default Select;
