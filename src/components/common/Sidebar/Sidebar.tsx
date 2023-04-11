import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

import "./Sidebar.scss";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [hoverIndex, setHoverIndex] = useState<number>(-1);

  const handleItemHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleItemLeave = () => {
    setHoverIndex(-1);
  };

  const items = [
    "Category",
    "Category",
    "Category",
    "Category",
    "Category",
    "Category",
    "Category",
  ];

  return (
    <section className="sidebar">
      <div className="sidebar__body">
        <button
          className="sidebar__item is-primary"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Category
        </button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="sidebar__row">
            {items.map((item, index) => (
              <button
                key={index}
                className={`menu-item ${
                  hoverIndex === index ? "hover" : ""
                } sidebar__item`}
                onMouseEnter={() => handleItemHover(index)}
                onMouseLeave={() => handleItemLeave()}
              >
                {" "}
                {item}{" "}
              </button>
            ))}
          </div>
        </Collapse>
      </div>
    </section>
  );
}

export default Sidebar;
