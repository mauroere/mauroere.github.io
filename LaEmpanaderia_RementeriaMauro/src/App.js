import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles/styles.css";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <h1 className="text-center">Ofertas de la semana</h1>
    </div>
  );
}

export default App;
