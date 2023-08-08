import { ItemTypes } from "app/utils/InterfaceType";
import React from "react";
import { useDrag } from "react-dnd";

export const TextComponent = ({ elm, index }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.ELEMENTOR,
    item: elm,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <div
      ref={dragPreview}
      className="col-md-6"
      style={{ opacity: isDragging ? 0.7 : 1 }}
    >
      <div ref={drag}>
        <div className="bg-white my-2 cursor-pointer d-flex justify-content-center align-items-center p-5 x_vss">
          {elm?.icon}
        </div>
      </div>
    </div>
  );
};
