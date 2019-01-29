import React, { Component } from 'react';
import { storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        storeProducts,
        detailProduct
    }
    handleDetail = () =>{
        console.log('handle details')
    }
    addToCart = () =>{
        console.log('add to cart')
    }
  render() {
    console.log(this.state);
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          addToCart:this.addToCart 
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
