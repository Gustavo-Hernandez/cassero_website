import React from 'react';
import "./styles/ProductCell.css"

const ProductCell = ({item}) =>{
  return (
    <div className="productCell">
      <img className="productCell-image" src="https://http2.mlstatic.com/D_NQ_NP_876562-MLM29688957453_032019-O.webp" alt={item.name}/>
      <h6>{item.name}</h6>
      <p>{item.price}</p>
    </div>
  );
}
export default ProductCell;