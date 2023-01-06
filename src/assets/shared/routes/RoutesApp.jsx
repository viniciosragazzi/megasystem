import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import PdfPage from "../../pages/pdfPage/pdfPage";
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/printPage" element={<PdfPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
