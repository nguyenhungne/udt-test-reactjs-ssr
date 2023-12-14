import React from "react";
import HomePage from "./pages/home";
import { Route, Routes, Router } from 'react-router-dom';
import Calculator from "./pages/calculator";
import HistoryPage from "./pages/history";

function App() {
  return (
      <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
      </>
  );
}

export default App;