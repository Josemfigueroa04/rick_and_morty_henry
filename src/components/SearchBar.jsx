import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChanges = (event) => {
      setId(event.target.value);
   };

   return (
      <div>
         <input type='search' value={id} onChange={handleChanges} />
         <button onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
