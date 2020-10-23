import React, { Component, Fragment } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../scss/Details.scss'


export class Details extends Component {
  static contextType = DataContext
  
  state = {
    product: []
  }

  getProduct = () => {
    if(this.props.match.params.id ){
        const res = this.context.products
        const data = res.filter(item=> {
          return item._id === this.props.match.params.id
        })
       this.setState({
         product: data
       })
    }
    
  }
  componentDidMount(){
    this.getProduct();
  }
  render() {
    const {product}=this.state
    console.log(this.state.products)
    return (
      <Fragment>
        {
          product.map(item=> (
            <div className="details" key={item._id}>
              <img src={item.src} alt=""/>
              <div className="box">
                <div className="row">
          <h2>{item.title}</h2>
          <span>{item.price} UAH</span>
                </div>
          <Colors colors={item.colors}/>
          <p>{item.description}</p>
          <Link to="/cart" className="cart">
          Add to cart
          </Link>
              </div>
            </div>

          ) 
          )
        }
      </Fragment>
    )
  }
}

export default Details
