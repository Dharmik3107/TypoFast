import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Type from "./pages/Type/Type";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/type" element={<Type />} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
