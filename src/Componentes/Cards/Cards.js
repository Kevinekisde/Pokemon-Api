import React from 'react';
import CardsPokemon  from './CardsPokemon';
import "../Cards/cards.css";

export const Cards = ({results}) => {
  return (
      <div className="container">
          <ul className="cards">
              {
                  results.map(p =>(
                      <li key ={p.name} className ="card-item">
                          <CardsPokemon url={p.url}/>
                      </li>
                  ))
              }
          </ul>
      </div>
  )

}


export default Cards