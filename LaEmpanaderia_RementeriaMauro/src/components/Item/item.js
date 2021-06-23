import React from "react";

export const Item = ({ item }) => {
  return (
    <div>
      <img src={item.pictureUrl} alt="" style={{ width: "18rem" }} />
      <div>
        <h5>{item.title}</h5>
        <div>
          <h5>${item.price}</h5>
        </div>
        <div>
          <button>Ver Ingredientes</button>
        </div>
      </div>
    </div>
  );
};
