import {useContext} from "react";
import PokemonContext from "../../context/pokemons";
export default function Home(){
    const myContext = useContext(PokemonContext);
    return(
        <div>
            Home
        </div>

    );
}