import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product"/>
            <div className="row">
              <ProductConsumer>
                {value=>{
                  // console.log(value);
                  return value.storeProducts.map( product =>{
                    return <Product key={product.id} product={product}/>
                  })
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
