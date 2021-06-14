import React from "react";
export const ItemListContainer = ({ greetings, mercadopago }) => {
  return (
    <>
      <h1 className="text-center">{greetings}</h1>
      <h2 className="text-center">{mercadopago}</h2>
    </>
  );
};
