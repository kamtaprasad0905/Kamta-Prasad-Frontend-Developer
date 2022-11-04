import React from "react";
import Header from "./components/shared/Header";
import { Routes, Route } from "react-router-dom";
import routes from "./constants/routes";
import Capsules from "./containers/Capsules";
import Rockets from "./containers/Rockets";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={routes.capsules} element={<Capsules />} />
        <Route path={routes.rockets} element={<Rockets />} />
      </Routes>
    </>
  );
};

export default App;
