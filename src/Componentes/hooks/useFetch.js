import {useState, useEffect} from "react"

const useFetch = (url) =>{

    const [data,setData] = useState({cargando:true,data:null});
    

    useEffect(() =>{
        getDatos(url)
    },[url])

    async function getDatos(url){
        try{
        setData({cargando:true,data:null});
        const resp =await fetch(url)
        const data = await resp.json();
        setData({cargando:false,data})
        }
        catch(e){
            console.log(e)
        }

    }
    return data    
}

export default useFetch