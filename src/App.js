import React from "react";
// Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
// Route
import { Routes, Route } from "react-router-dom";

// Below {["/game/:id", "/"]} , So both url will render the Home

// <Routes>
// <Route path={["/game/:id", "/"]} element={<Home />} />
// </Routes>

function App() {
  return (
    <div>
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
