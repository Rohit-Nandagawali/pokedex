import { PokemonSchema } from "../../Types/PokemonSchema"
import PokeCard from "../PokeCard/PokeCard"
import "./PokeList.css"

interface PokelistProps{
    searchedPokemons : PokemonSchema[]
    onPokemonClick:(pokemonName:string) => void
}

const PokeList =({searchedPokemons,onPokemonClick}: PokelistProps)=>{
    return(
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon)=>{
                    return(
                        // create pokecard if the pokemon.name is not null
                        pokemon.name && ( 
                        <PokeCard
                        onPokemonClick={onPokemonClick}
                        key={pokemon.id}
                        name={pokemon.name}
                        spriteUrl={pokemon.sprites?.normal}
                        />)
                       
                    )
                })
            }            
        </div>
    )
}
export default PokeList