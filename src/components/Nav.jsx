import SearchBar from "./SearchBar"

const Nav = ({onSearch, addRandomCharacter}) => {
    return(
        <div>
           <SearchBar onSearch={onSearch} />
           <button onClick={addRandomCharacter}>Agregar Personaje Random</button>
        </div>
        
    )
};

export default Nav;