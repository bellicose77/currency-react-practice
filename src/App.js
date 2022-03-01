import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnotherPage from "./component/AnotherPage";
import FormHandling from "./component/FormHandling";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<FormHandling />} />
          <Route path="/home/anotherPage" element={<AnotherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
