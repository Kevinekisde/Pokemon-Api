
import useFetch from "../hooks/useFetch";
import Cards from "../Cards/Cards"
import {useState} from 'react'
import "../pages/style.css"



const Pokemon = () => {

   const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
   const estado = useFetch(url)
   const {cargando,data} = estado
   cargando ? console.log("cargando"):console.log(data.results)

    return(
        <div>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                <div>
                <Cards results={data.results}></Cards>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button onClick ={ () => setUrl(data.previous)} className="btn btn-dark">Anterior</button>
                    <button onClick ={ () => setUrl(data.next)} className="btn btn-danger ">Siguiente</button>

                </div>


                </div>
                
            }
        </div>
    )

}

export default Pokemon