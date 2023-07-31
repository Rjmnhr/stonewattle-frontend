// src/DraggableList.js
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const DraggableList = ({ items }) => {
  return (
    <Droppable>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {item.id}
                  {item.content}
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  );
};

export default DraggableList;
