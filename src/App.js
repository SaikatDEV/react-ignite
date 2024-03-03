import React from "react";
// Components and pages
import Home from "./pages/Home";
import GameDetail from "./components/GameDetail";
import GlobalStyles from "./components/GlobalStyles";
// Route
import { Routes, Route } from "react-router-dom";

// Below {["/game/:id", "/"]} , So both url will render the Home

// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/game/:id" element={<GameDetail />} />
// </Routes>

function App() {
  return (
    <div>
      <GlobalStyles />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;
