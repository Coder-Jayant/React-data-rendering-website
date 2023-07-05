import React, { Component } from 'react';
import { Data } from '../Data/Data';
import ProductInfo from './ProductInfo.jsx'
class ProductsList extends Component {

  state = {
    id: 3,
  };

  onItemClick = (id) => {
    this.setState({ id });
  };

  render() {
    return (
      <div>
        <h1>Product List & Info:</h1>
        <button style={{display:'block', marginLeft:'1%',height:'5vh',textAlign:'center'}} onClick={() => this.toggleDropdown()}>List of Items
          
        </button>
        <ul id="dropdown-list" style={dropdownStyles}>
          {Data.map((item) => (
            <li key={item.id}>
              <a style={linkStyles} href="#" onClick={() => this.onItemClick(item.id)}>
                {item.Name}
              </a>
            </li>
          ))}
        </ul>
        <ProductInfo id={this.state.id} />
      </div>
    );
  }

  toggleDropdown = () => {
    const dropdownList = document.getElementById("dropdown-list");
    dropdownList.style.display = dropdownList.style.display === "none" ? "block" : "none";
  };
}
const linkStyles={
  textDecoration:'none',
  color:'black',
  display: "block",
  border: '1.5px solid grey ',
  boxSizing: 'border-box',
  padding : '2%',
  textAlign:'center'
}
const dropdownStyles={
  
  marginTop:'0px',
  listStyle:'none',
  width:'21vw',
  display: "inline-block",
  boxSizing: 'border-box',
  padding : '1%'
}
export default ProductsList;
