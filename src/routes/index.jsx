import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { PublicRoutes } from "./public";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
