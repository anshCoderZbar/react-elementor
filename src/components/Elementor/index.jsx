import { sideBar } from "mock";
import React from "react";
import { useDrag } from "react-dnd";

import { RxCross1 } from "react-icons/rx";

export const Elementor = ({ setActive }) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type,
    item,
  }));
  return (
    <div>
      <button
        className="btn btn-secondary position-absolute top-50 "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        onClick={() => setActive(true)}
      >
        &#x2192;
      </button>

      <div
        className="offcanvas offcanvas-start show w-25"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header ">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Elementor
          </h5>
          <button
            type="button"
            className="btn btn-outline text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setActive(false)}
          >
            <RxCross1 />
          </button>
        </div>
        <div className="offcanvas-body offcanvas_bg">
          <div className="row">
            {sideBar?.map((elm) => {
              return collected?.isDragging ? (
                <div ref={dragPreview}>{console.log("drag started")}</div>
              ) : (
                <div
                  ref={drag}
                  {...collected}
                  key={elm?.id}
                  className="col-md-6"
                >
                  <div className="bg-white my-2 d-flex justify-content-center align-items-center p-5 x_vss">
                    {elm?.icon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
