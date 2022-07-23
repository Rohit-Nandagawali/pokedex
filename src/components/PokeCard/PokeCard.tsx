import "./PokeCard.css"

interface PokecardProps {
    name:string ;
    spriteUrl?:string
    onPokemonClick:(pokemonName:string) => void
}

const PokeCard =({spriteUrl,name,onPokemonClick} : PokecardProps)=>{
    return(
         (
            <div onClick={()=>onPokemonClick(name)} className="pokecard">
            {/* image */}
            <img src={spriteUrl} alt={name} className="pokemon-sprite" />
            {/* name of pokemon */}
            <p>{name}</p>

        </div>
        )
       
    )
}
export default PokeCard