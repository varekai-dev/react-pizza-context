import React, { Component } from 'react'

export const DataContext = React.createContext()
 
export class DataProvider extends Component {
  state = {
    products: [
      {"_id": "1",
      "title": "Сырная 🌱",
       "src": "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/50d61738-66c4-4e32-914b-893b15463041.jpg",
       "description": "Увеличенная порция моцареллы, томатный соус",
       "content": "Сырная 25 см, традиционное тесто, 360 г Увеличенная порция моцареллы, томатный соус ",
       "price": 100,
       "colors": ["red", "black", "crimson", "teal"],
       "count": 1
    },
    {"_id": "2",
    "title": "Ветчина и сыр",
     "src": "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/483b5bef-1b34-49dc-81c6-3d912468eee2.jpg",
     "description": "Ветчина, увеличенная порция моцареллы, соус альфредо",
     "content": "Ветчина, увеличенная порция моцареллы, соус альфредо",
     "price": 100,
     "colors": ["red", "black", "crimson", "teal"],
     "count": 1
  },
  {"_id": "3",
  "title": "Кисло-сладкий цыпленок",
   "src": "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/30744281-c5e9-48d4-b901-34182833846e.jpg",
   "description": "Цыпленок, томатный соус, моцарелла, кисло-сладкий соус",
   "content": "Цыпленок, томатный соус, моцарелла, кисло-сладкий соус ",
   "price": 120,
   "colors": ["light-blue","white", "red", "black", "crimson", "teal"],
   "count": 1
},
{"_id": "4",
"title": "Ветчина и грибы",
 "src": "https://cdn.dodostatic.net/static/Img/Products/b1ffa66f2ebb4e959122e54eaa071109_233x233.jpeg",
 "description": "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соу",
 "content": "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соу",
 "price": 99,
 "colors": ["red", "black", "crimson", "teal"],
 "count": 1
},
{"_id": "5",
"title": "Пепперони",
 "src": "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/ba1a843b-188e-4a6c-851d-c32543547a46.jpg",
 "description": "Пикантная пепперони, увеличенная порция моцареллы, томатный соус",
 "content": "Пикантная пепперони, увеличенная порция моцареллы, томатный соус ",
 "price": 117,
 "colors": ["orange", "black", "crimson", "teal"],
 "count": 1
},
{"_id": "6",
"title": "Чизбургер-пицца",
 "src": "https://cdn.dodostatic.net/static/Img/Products/1959b0fdf5f049fb9ec12cf05d535bc7_233x233.jpeg",
 "description": "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
 "content": "Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер",
 "price": 129,
 "colors": ["red", "black", "crimson", "teal"],
 "count": 1
},
    ]
  }

  render() {
    const {products}= this.state
    return (
      <DataContext.Provider value={{products}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
