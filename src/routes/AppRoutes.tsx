import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Music from "../pages/Music/Music";
import Gallery from "../pages/Gallery/Gallery";
import Merchandise from "../pages/Merchandise/Merchandise";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/music"
          element={
            <MainLayout>
              <Music />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/merchandise"
          element={
            <MainLayout>
              <Merchandise />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;