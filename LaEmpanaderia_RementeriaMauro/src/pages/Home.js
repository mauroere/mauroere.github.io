import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import "../styles/styles.css";

export const Home = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer />
    </div>
  );
};
