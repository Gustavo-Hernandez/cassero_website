import React from "react";
import "./styles/ProductsSection.css";
import ProductCell from "../components/ProductCell";

const ProductsSection = () => {
  return (
    <div className="productSection-mainContainer pt-4">
      <h3>Productos</h3>
      <div className="productSection-productsContainer">
        <ProductCell item={{ name: "Alfajor1", price: "$123.50" }} />
        <ProductCell item={{ name: "Alfajor2", price: "$123.50" }} />
        <ProductCell item={{ name: "Alfajor3", price: "$123.50" }} />
        <ProductCell item={{ name: "Alfajor4", price: "$123.50" }} />
      </div>
    </div>
  );
};
export default ProductsSection;
