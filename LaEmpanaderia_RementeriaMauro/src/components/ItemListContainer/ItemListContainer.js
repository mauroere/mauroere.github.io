import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Empanada de Carne a Cuchillo",
            price: 70,
            ingredients:
              "Carne de vaca, huevo duro, cebolla, ajo, verdeo, comino, sal y pimienta",
            pictureUrl:
              "https://img.freepik.com/foto-gratis/empanada-tipica-espanola-blanco_123827-9709.jpg",
          },
          {
            id: 2,
            title: "Empanada de Jamón y Mozzarella",
            price: 70,
            ingredients: "Jamón cocido, mozzarella hilada, sal y pimienta",
            pictureUrl:
              "https://image.freepik.com/foto-gratis/hojaldre-curry-aislado-sobre-fondo-blanco_11554-186.jpg",
          },
          {
            id: 3,
            title: "Empanada Capresse",
            price: 70,
            ingredients: "Tomate, albahaca, mozzarella hilada, sal y pimienta",
            pictureUrl:
              "https://image.freepik.com/foto-gratis/hojaldre-curry-aislado-sobre-fondo-blanco_11554-192.jpg",
          },
        ]);
      }, 2000);
    });

    prom.then((resultado) => {
      setItems(resultado);
    });
  });

  return (
    <>
      <ItemList items={items} />
      <ItemCount initial={1} stock={5} />
    </>
  );
};
