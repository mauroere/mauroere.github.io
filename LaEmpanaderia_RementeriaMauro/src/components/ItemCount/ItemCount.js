import React, { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    setCount(count - 1);
  };

  return (
    <div className="item">
      <div className="item-head_desc">
        <div className="item-head_desc">
          <p className="head_desc-name">Empanadas de Carne a Cuchillo</p>
        </div>
        <button disabled={count <= initial} type="button" onClick={removeItem}>
          -
        </button>
      </div>
      <span className="foot_desc-price">{count}</span>
      <div className="item-head_desc">
        <button disabled={count >= stock} type="button" onClick={addItem}>
          +
        </button>
      </div>

      <button
        disabled={count <= 0}
        className="button"
        type="button"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
