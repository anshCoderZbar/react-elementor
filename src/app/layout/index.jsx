import React, { useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <div className="d-flex ">
      <div className={`${active ? "w-25" : "w-0"}`}>
        <Header setActive={setActive} />
      </div>
      <div className={`${active ? "w-75" : "w-100"}`}>
        {children}
        <Footer />
      </div>
    </div>
  );
};
