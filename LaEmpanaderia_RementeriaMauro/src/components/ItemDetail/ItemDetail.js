import React from "react";

export default ItemDetail = ({ item }) => {
  return (
    <>
      <img src={item?.pictureUrl} alt="" />
      <h2>{item?.title}</h2>
      <p>{item?.ingredients}</p>
      <div>${item?.price}</div>
    </>
  );
};
