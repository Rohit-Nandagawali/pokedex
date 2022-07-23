
import "./SearchBox.css";

interface SearchBoxProps{
    onInputChange:(inputValue:string) => void
}

const SearchBox=({onInputChange}:SearchBoxProps)=>{
    return(
        <input onChange={(e)=>{
            // console.log(e.target.value);
            onInputChange(e.target.value) 
            
        }} type="search" className="search" placeholder="Seach Pokemons"/>
    )
}
export default SearchBox