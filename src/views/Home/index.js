import {useContext} from "React";
import PokemonContext from "../../pokemons";
export default function Home(){
    const myContext = useContext(PokemonContext);
    return(
        <div>
            Home
        </div>

    );
}