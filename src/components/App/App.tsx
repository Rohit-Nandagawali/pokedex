import React from 'react';
import { pokemonData } from '../../pokemonData/pokemonData';
import { PokemonSchema, PokemonSpriteSchema, UnpachedPokemonSchema } from '../../Types/PokemonSchema';
import Pokedex from '../Pokedex/Pokedex';
import './App.css'

interface AppState{
    searchField : string;
    allPokemons :PokemonSchema[];
    searchedPokemons:PokemonSchema[];
    selectedPokemon:PokemonSchema | undefined;
}

class App extends React.Component<any,AppState>{
    state = {
        searchField :"",
        allPokemons :[],
        searchedPokemons:[],
        selectedPokemon:undefined
        
    }

    // we are taking the unpatchedPokemonScehma and patch them 
    patchPokemonData=(pokemon : UnpachedPokemonSchema[])=>{
         const patchedPokemons = pokemon.map((pokemon )=>{
            let parseSprite : PokemonSpriteSchema = {
                normal : undefined,
                animated:undefined
            }
            try{ 
                parseSprite=pokemon.sprites && JSON.parse(pokemon.sprites)
            }
            catch(e){
                console.log("exception while passing the sprite : ",e);
                
            }

            const patchedPokemon : PokemonSchema ={
                ...pokemon,
                sprites : parseSprite
            }

            return patchedPokemon
         })
         return patchedPokemons
    }
    componentDidMount(){
        // patch the stringified pokemon sprites
        const patchedPokemons : PokemonSchema[] = this.patchPokemonData(pokemonData)

        // console.log("this is patch -----",patchedPokemons);
        // console.log("this is unpatched -----",pokemonData);
        

        // update the states with the patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons:patchedPokemons
        })
        
    }


    handleInputChange = (inputValue : string)=>{
        const {allPokemons} = this.state

        // following code filter the pokemon which contains inputValue in their names
        const searchedPokemons = allPokemons.filter(
            (pokemon:PokemonSchema)=>{
                return(
                    // go here only if the something is present in name
                    pokemon.name &&
                    pokemon.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
                )
            }
        )
        this.setState({
            searchField:inputValue,
            searchedPokemons
        })
        
    }

    // handle cilck on 
    handleClick = (pokemonName : string)=>{
        const {allPokemons} = this.state

        // find the selected pokemon from allPokemon
        const selectedPokemon = allPokemons.find(
            (pokemon : PokemonSchema)=> pokemon.name === pokemonName
        )


        // update the state
        this.setState({selectedPokemon})
    }
    render() {
        return(
            <div className="App">
                
                <h1>Pokedex</h1>
                <Pokedex 
                searchedPokemons ={this.state.searchedPokemons}
                selectedPokemon ={this.state.selectedPokemon}
                onPokemonClick ={this.handleClick}
                
                onInputChange ={this.handleInputChange}

                />
            </div>
        )
    }
}
export default App