import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';



function App() {
   const [characters, setCharacters] = useState([]);
   
   const onSearch = (id) => {
      // Verifica si el personaje ya está en la lista
      const isCharacterExists = characters.find((character) => character.id === Number(id));
      
      if (isCharacterExists) {
        window.alert('¡El personaje ya se encuentra en la lista!');
      } else {
        // Si el personaje no está en la lista, realiza la búsqueda y agrega el personaje
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('¡No hay personajes con este ID!');
          }
        });
      }
    };

    const addRandomCharacter = () => {
      const randomId = Math.floor(Math.random() * 671) + 1; // Genera un ID aleatorio entre 1 y 671
      axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(({ data }) => {
        if (data.name) {
          // Verifica si el personaje ya está en la lista
          const isCharacterExists = characters.find((character) => character.id === randomId);
    
          if (isCharacterExists) {
            // Si el personaje ya está en la lista, intenta agregar otro personaje aleatorio
            addRandomCharacter();
          } else {
            // Si el personaje no está en la lista, agrégalo
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          // Si no se encuentra el personaje, intenta agregar otro personaje aleatorio
          addRandomCharacter();
        }
      });
    };
    
    

   const onClose=(id)=> {
      const charactersFilter = characters.filter((character) => character.id !== Number(id));
      setCharacters(charactersFilter);
   }

   return (
      <div className='App'>

        <Nav onSearch={onSearch} addRandomCharacter={addRandomCharacter} />
        <Routes>  
          <Route path='/' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<h1>Not Found 404</h1>} />
             
        </Routes>
        
      </div>
   );
}

export default App;
