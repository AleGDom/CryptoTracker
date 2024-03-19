import { useState } from "react"
import useItem from "../hooks/useItem";

function CriptoBar(){
    let apiCripto = "https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=3&tsym=USD";
    const [infoData,setInfoData] = useState([{name:"BTC",price:3000}]); 
    const [nombre, Elemento] = useItem(setInfoData,"Alexis");

  console.log(infoData);
    
    return (
        <>
            <div>
                <nav>
                    <Elemento/>
                </nav>
            </div>
        </>
    )
}

export default CriptoBar