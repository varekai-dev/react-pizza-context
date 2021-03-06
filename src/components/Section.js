import React, {Component} from 'react';
import Products from './section/Products';
import Details from './section/Details';
import { Route } from 'react-router-dom';


class Section extends Component {
  render() {
    return (
      <section>
          <Route path="/products/" component={Products} exact/>
          <Route path="/products/:id" component={Details}/>
      </section>
    )
  }

}

export default Section
