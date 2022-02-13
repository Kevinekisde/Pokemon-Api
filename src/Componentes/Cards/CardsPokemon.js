import React from 'react';
import useFetch from "../hooks/useFetch"
import "../Cards/cards.css";

const CardsPokemon = ({url}) => {
   const estado = useFetch(url)
   const {cargando,data} = estado

  return( 
  <div>
        {
          cargando
          ?
          <h1>Cargando</h1>
          :
        <div className="card text-white bg-dark mb-3 card border-danger mb-3" style={{width:"14rem"}}>

            <div className="card-header">
                <h5 className="card-title fw-bold">{data.id}</h5>
            </div>

            <div className="card-body">
                <img src={data.sprites.front_default} alt ="pokemon" />
            </div>

            <div className="card-footer">
                <p className="card-text text-capitalize fw-bold">{data.forms[0].name}</p>
            </div>

        </div>
        }

  </div>
  )
};

export default CardsPokemon