import React from "react";
import Header from "./Header";
import NavPage from "./components/NavPage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavPage/>
      </BrowserRouter>
    </>
  );
};

export default App;
