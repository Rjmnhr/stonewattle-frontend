// src/App.js
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableList from "./list";

const DragApp = () => {
  const initialItems = [
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
  ];

  const [items, setItems] = React.useState(initialItems);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Draggable List</h1>
      <DragDropContext>
        <DraggableList items={items} onDragEnd={onDragEnd} />
      </DragDropContext>
    </div>
  );
};

export default DragApp;
