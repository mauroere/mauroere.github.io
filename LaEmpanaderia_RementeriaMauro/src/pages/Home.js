import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import "../styles/styles.css";

export const Home = () => {
  const greetings = "Ofertas de la semana";

  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greetings={greetings} />
    </div>
  );
};
