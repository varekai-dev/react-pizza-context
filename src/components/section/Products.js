import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../scss/Products.scss'

export class Products extends Component {
  static contextType = DataContext

  render() {
  
    const {products}= this.context
   
    return (
      <div id="products">
        
        {
          products.map(product =>(
            <div className="card" key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.src} alt=""/>
              </Link>
              <div className="content">
             <h3> <Link to={`/products/${product._id}`}> {product.title}</Link> </h3> 

          <span>{product.price} uah</span>
          <p>{product.description}</p>
          <button>Add to card</button>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Products
