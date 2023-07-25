import React from "react";
import { useDrag } from "react-dnd";

const FilterItem = ({ filter, category }) => {
  console.log(filter);
  const [, dragRef] = useDrag({
    type: "FILTER", // Add the 'type' property with a unique value (e.g., 'FILTER')
    item: { filter, category },
  });

  return (
    <div
      className="filter-item-container"
      ref={dragRef}
      style={{ cursor: "pointer" }}
    >
      <p
        style={{
          background: "#333333",

          padding: "8px",
          margin: "10px",
          borderRadius: "8px",
        }}
      >
        {filter}
      </p>
    </div>
  );
};

export default FilterItem;
