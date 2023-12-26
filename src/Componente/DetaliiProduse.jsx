import React from "react";
const DetaliiProduse = ({ product }) => {
    return (
      <div>
        <h2>{product.name}</h2>
        <p>Pret: {product.price} Lei</p>
        <p>Descriere: {product.content} </p>
      </div>
    );
  };

export default DetaliiProduse;