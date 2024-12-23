import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
// import About from "../pages/About/About";
import Music from "../pages/Music/Music";
import Journey from "../pages/Journey/Journey";
import Merchandise from "../pages/Merchandise/Merchandise";
import ETDM from "../pages/ETDM/ETDM";

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
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        {/* <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        /> */}
        <Route
          path="/music"
          element={
            <MainLayout>
              <Music />
            </MainLayout>
          }
        />
        <Route
          path="/journey"
          element={
            <MainLayout>
              <Journey />
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
        <Route
          path="/ETDM"
          element={
            <MainLayout>
              <ETDM />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
