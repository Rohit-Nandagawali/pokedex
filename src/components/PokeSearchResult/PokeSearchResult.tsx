import { PokemonSchema } from "../../Types/PokemonSchema"
import "./PokeSearchResult.css"

interface pokeSearchResultProps{
    selectedPokemon:PokemonSchema | undefined
  
}

const PokeSearchResult =({selectedPokemon} : pokeSearchResultProps)=>{
    // we give || {} after selectedPokemon this means it can be undefined also
    const {name,id,height,weight,base_experience,sprites} = selectedPokemon || {}
    return(
        <div className="poke-result-card">
            {
                selectedPokemon ? (
                    <div>
                        {/* add the pokemon image here */}
                        <img 
                        // if animated sprites not available then show normal sprite
                        className="pokemon-animated-sprite"
                        src={sprites?.animated || sprites?.normal}
                        alt={name} />

                        {/* text details */}
                        <p>Name: {name}</p>
                        <p>Id: {id}</p>
                        <p>height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Base Exp: {base_experience}</p>
                    </div>
                ) :(
                    <h2>Welcome to Pokedex</h2>
                )
            }
        </div>

    )
}
export default PokeSearchResult