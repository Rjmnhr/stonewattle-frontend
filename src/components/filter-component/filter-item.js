import React from "react";
import { useDrag } from "react-dnd";

import { MdClose } from "react-icons/md";

const FilterItem = ({ filter, category, onRemoveFilter }) => {
  const [, dragRef] = useDrag({
    type: "FILTER", // Add the 'type' property with a unique value (e.g., 'FILTER')
    item: { filter, category },
  });

  const handleRemoveFilter = () => {
    onRemoveFilter(filter, category);
  };
  return (
    <div
      className="filter-item-container"
      ref={dragRef}
      style={{ cursor: "pointer" }}
    >
      <p
        style={{
          background: "#333333",
          display: "flex",
          alignItems: "center",
          padding: "8px",
          margin: "10px",
          borderRadius: "8px",
        }}
      >
        {filter}
        {category !== "available" && (
          <MdClose
            style={{ color: "gainsboro", background: "gray", margin: "5px" }}
            onClick={handleRemoveFilter}
          />
        )}
      </p>
    </div>
  );
};

export default FilterItem;
