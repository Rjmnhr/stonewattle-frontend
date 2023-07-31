import React, { useState } from "react";

const DraggableItem = ({ item, onDragStart }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", item);
    setIsDragging(true);
    setStartPosition({ x: event.clientX, y: event.clientY });
  };

  const handleTouchStart = (event) => {
    event.persist();
    setIsDragging(true);
    const touch = event.touches[0];
    setStartPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDrag = (event) => {
    if (isDragging) {
      const deltaX = event.clientX - startPosition.x;
      const deltaY = event.clientY - startPosition.y;
      event.target.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const touch = event.touches[0];
      const deltaX = touch.clientX - startPosition.x;
      const deltaY = touch.clientY - startPosition.y;
      event.target.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }
  };

  return (
    <div
      draggable
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{
        cursor: "grab", // Show the grab cursor while dragging
      }}
    >
      {item}
    </div>
  );
};

const DroppableArea = ({ onDrop }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (event) => {
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    setIsDragOver(false);
    const data = event.dataTransfer.getData("text/plain");
    onDrop(data);
  };

  return (
    <div
      className={`droppable-area ${isDragOver ? "drag-over" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onTouchMove={(event) => event.preventDefault()} // Prevent scrolling on touch devices during drag
    >
      Drop here!
    </div>
  );
};

const TouchAndDrop = () => {
  const [droppedItem, setDroppedItem] = useState(null);

  const handleDrop = (item) => {
    setDroppedItem(item);
  };

  return (
    <div>
      <DraggableItem item="Item 1" onDragStart={() => setDroppedItem(null)} />
      <DraggableItem item="Item 2" onDragStart={() => setDroppedItem(null)} />
      <DraggableItem item="Item 3" onDragStart={() => setDroppedItem(null)} />

      <DroppableArea onDrop={handleDrop} />

      {droppedItem && <p>Dropped Item: {droppedItem}</p>}
    </div>
  );
};

export default TouchAndDrop;
