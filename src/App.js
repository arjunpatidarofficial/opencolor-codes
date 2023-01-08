import React from "react";
import "./App.css";
import HtmlColor from "./container/htmlColor/htmlColor";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HtmlColor />} />
    </Routes>
  );
}

export default App;
