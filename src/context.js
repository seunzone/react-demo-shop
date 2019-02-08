import React, { Component } from 'react';
import { storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products: [],
        detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            products = [...products, singleItem];
        })
        this.setState(()=>{
            return {products}
        })
    }
    handleDetail = () =>{
        console.log('handle details')
    }
    addToCart = (id) =>{
        console.log('add to cart from ' + id)
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
