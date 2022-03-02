import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { GlobalStyle } from "./utils/GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:location" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
