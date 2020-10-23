import React, {Component} from 'react';
import Menu from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import Close from './svg/times-solid.svg'
import PizzaIcon from './svg/pizza.png'
import {Link} from 'react-router-dom'
import './scss/Header.scss'




class Header extends Component {

  state={
    toogle: false
  }

  
  menuToogle = () => {
    this.setState({
      toogle: !this.state.toogle
    })
  }
  render(){
    const {toogle} = this.state
     const links =[{
       url: '/', 
       title: 'Home'
     },
     {
      url: '/products', 
      title: 'Products'
    },
    {
      url: '/contact', 
      title: 'Contact'
    },
    {
      url: '/about', 
      title: 'About'
    },
    {
      url: '/login', 
      title: 'Login /Register'
    },
    ]
    return (
     <header>
       <div className="menu" onClick={this.menuToogle}>
      <img src={Menu} alt="" width="20"/>
       </div>
       <div className="logo">
        <h1><Link to='/'>
          <img src={PizzaIcon} alt="" width={25}/> Pizza
          </Link></h1>
       </div>
       <nav>
         <ul className={toogle? 'toogle': ''}>
            {
              links.map((link, index)=>(
              <li key={index} onClick={this.menuToogle}><Link to={link.url}>{link.title}</Link></li>
              ))
            }

           <li className="close" onClick={this.menuToogle}>
           <img src={Close} alt="" width="20"/>
           </li>
         </ul>
         <div className="nav-cart">
         
             <Link to='/cart'>  <span>0</span> <img src={CartIcon} alt="" width="20"/></Link>
         
        
         </div>
       </nav>
     </header>
    )
  }
  
}

export default Header

