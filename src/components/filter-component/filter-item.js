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
    <>
      <p
        ref={dragRef}
        style={{
          background: "#333333",
          display: "flex",
          alignItems: "center",
          padding: "8px",
          margin: "10px",
          borderRadius: "8px",
          cursor: "grab",
          color: "white",
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
    </>
  );
};

export default FilterItem;
