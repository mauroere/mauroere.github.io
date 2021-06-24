import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 2,
        title: "Empanada de Jamón y Mozzarella",
        price: 70,
        ingredients: "Jamón cocido, mozzarella hilada, sal y pimienta",
        pictureUrl:
          "https://image.freepik.com/foto-gratis/hojaldre-curry-aislado-sobre-fondo-blanco_11554-186.jpg",
      });
    }, 2000);
  });
};

export default ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    getItems().then((res) => setItem(res));
    return;
  }, []);

  return <ItemDetail item={item} />;
};
