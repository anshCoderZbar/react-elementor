import React from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "app/utils/InterfaceType";

export const Dropable = ({ dropFunction }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENTOR,
    drop: (item) => dropFunction(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? "red" : "white" }}>
      {canDrop ? "Release to drop" : "Drag a box here"}
    </div>
  );
};
