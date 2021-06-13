import React from "react";

import cart from "../../assets/img/carrito.svg";

export const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt="Carrito" title="Carrito" />
    </div>
  );
};
