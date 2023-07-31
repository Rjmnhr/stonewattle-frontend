// src/ListItem.js
import React from "react";
import { Draggable } from "react-beautiful-dnd";

const ListItem = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: "none",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "8px",
            backgroundColor: "white",
            ...provided.draggableProps.style,
          }}
        >
          {item.id}
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
