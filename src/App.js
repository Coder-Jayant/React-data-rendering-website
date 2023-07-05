import React from "react";
import "./style.css";

import ProductsList from './Components/ProductsList.jsx'


export default function App() {

  return (
    <div style={{maxWidth:'100vw',maxHeight:'100vh'}}>
      <ProductsList/>
    </div>
  );
}
