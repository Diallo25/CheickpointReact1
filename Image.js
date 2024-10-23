// Image.js
import React from "react";
import productImage from './img/img-1950.png'; // Mettre le bon chemin de votre image

const Image = () => {
  return <img src={productImage} alt="Produit" style={{ width: '100%' }} />;
};

export default Image;
