import SearchBar from "./SearchBar"
import { Link, NavLink } from "react-router-dom";

const Nav = ({onSearch, addRandomCharacter}) => {
    return(
        <nav>
           <SearchBar onSearch={onSearch} />
           <button onClick={addRandomCharacter}>Agregar Personaje Random</button>
              <Link to="/about"><button>About</button></Link>
              <NavLink to="/"><button>Home</button></NavLink>
        </nav>
        
    )
};

export default Nav;