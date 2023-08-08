import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/home";
import { Layout } from "app/layout";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
