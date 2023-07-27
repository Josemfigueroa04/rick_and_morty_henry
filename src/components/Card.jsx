import { Link } from "react-router-dom";

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
       <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
           <h2>name: {name}</h2> 
         </Link>
         <h2>status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>genero: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt='' /> 

      </div>
   );
};
