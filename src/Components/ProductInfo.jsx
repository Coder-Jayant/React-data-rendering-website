import React from 'react';
import Data from '../Data/Data'
const ProductInfo = ({ id }) => {
  const product = Data.find((item) => item.id === id);

  return (
    <span  style={cardStyles}>

      <h1>{product.Name}</h1>
      <p>Price: Rs. {product.Price}</p>
      <h3>Item Id: {product.id}</h3>
    </span>
  );
};

const cardStyles={
  margin: '10vh 10vw 1vh 27vh',
    width: 'fit-content',
    height: 'fit-content',
    display: 'inline-block',
    border: '1px solid grey',
    boxSizing: 'border-box',
    padding: '1%',
    position: 'fixed',

}

export default ProductInfo;
