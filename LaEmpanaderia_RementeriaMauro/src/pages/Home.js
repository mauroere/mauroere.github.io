import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import "../styles/styles.css";

export const Home = () => {
  const greetings = "Ofertas de la semana";
  const promo = "Pagá con MercadoPago"

  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greetings={greetings} mercadopago={promo} />
    </div>
  );
};
