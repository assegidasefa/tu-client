import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "../component/homeComponent/HomeComponent";
import UniversityComponent from "../component/UniversityComponent/UniversityComponent";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/university" element={<UniversityComponent/>}/>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
