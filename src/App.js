import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GeneralSettings from "./views/GeneralSettings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<GeneralSettings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
