import SearchBar from "./SearchBar"
import { Link, NavLink, useNavigate } from "react-router-dom";

const Nav = ({onSearch, addRandomCharacter}) => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
    // Aquí puedes agregar la lógica para quitar los permisos de acceso
    // y cualquier otra acción necesaria antes de redirigir al componente Form
    // Por ejemplo, puedes borrar los tokens de autenticación, limpiar el estado, etc.
     // Redirigir al componente Form
    navigate("/");
  };
    

    return(
        <nav>
           <SearchBar onSearch={onSearch} />
           <button onClick={addRandomCharacter}>Agregar Personaje Random</button>
           
              <Link to="/about"><button>About</button></Link>
              <NavLink to="/home"><button>Home</button></NavLink>
              <button onClick={handleLogout}>Log out</button>
        </nav>

// jsx
// import React from "react";
// import { useHistory } from "react-router-dom";
//  const Nav = () => {
//   const history = useHistory();
   
//    return (
//     <nav>
//       {/* Otros elementos de navegación */}
//       <button onClick={handleLogout}>Log out</button>
//     </nav>
//   );
// };
//  export default Nav;
        
    )
};

export default Nav;