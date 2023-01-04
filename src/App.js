import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Type from "./pages/Type/Type";
import NotFound from "./pages/NotFound/NotFound";
import { useMediaQuery } from "react-responsive";
import NotaDesktop from "./pages/NotaDesktop/NotaDesktop";
function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return isDesktopOrLaptop ? (
    <Router>
      <Routes>
        <Route
          exact
          path="https://dharmik3107.github.io/typofast/"
          element={<Home />}
        />
        <Route
          exact
          path="https://dharmik3107.github.io/typofast/type"
          element={<Type />}
        />
        <Route component={NotFound} />
      </Routes>
    </Router>
  ) : (
    <NotaDesktop />
  );
}

export default App;
