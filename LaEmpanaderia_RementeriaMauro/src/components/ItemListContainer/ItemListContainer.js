import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemListContainer = ({ greetings, mercadopago }) => {
  return (
    <>
      <h1 className="text-center">{greetings}</h1>
      <h2 className="text-center">{mercadopago}</h2>
      <ItemCount initial={1} stock={5} />
    </>
  );
};
