import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';


const Detail = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
             
         <h2>name: {character.name && character.name }</h2> 
         <h2>status: {character.status && character.status }</h2>
         <h2>species: {character.species && character.species }</h2>
         <h2>genero: {character.gender && character.gender}</h2>
         <h2>origin: {character.origin?.name && character.origin?.name}</h2>
         <img src={character.image} alt='' /> 
        </div>
    )
}

export default Detail;
