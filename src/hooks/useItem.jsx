import {useState, useEffect } from "react"


function useItem(setData,name){
    const [state,setState]=useState("Alexis");
    let isFirst = true;
    useEffect(()=>{
        const ConsultarApi = async () =>{
            const url = "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=3&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            
            const arrayCriptos=resultado.Data.map(cripto=>{
                

                const moneda ={
                    id : cripto.CoinInfo.Name,
                    nombre : cripto.CoinInfo.FullName
                }

                return moneda;
            })
            setState(arrayCriptos);

        }

        ConsultarApi();
         
    },[]);

    if(isFirst){
        console.log('Es la primera vez')
        isFirst=false;
    } else{
        console.log('ya no es la primera vez');
    }

    const element =()=>(
        <>
            <a href="#" onClick={()=>setData("Hola")}>Hola {name}</a>
        </>
    )
    
    return [state, element];
    
}

export default useItem