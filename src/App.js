import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import { BASE_URL, PEOPLE } from './constants/constants';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [displayId, setDisplayId] = useState([]);

  const openDetails = (id) => {
    setDisplayId(id);
  }

  const closeDetails = () => {
    setDisplayId(null);
  }

  useEffect(() => {
    // const addIds = (data) => {
    //   return data.map(obj => {
    //     const id = Number(obj.url.substring(28, obj.url.length - 1)) // TODO: 28 is janky, maybe take length of constants added together?
    //     console.log(id)
    //     console.log(obj)
    //     debugger;
    //     const newObj = {...obj, id: id};
    //     console.log(id)
    //     console.log(obj)
    //     debugger;
    //     return newObj;
    //   });
    // }
    
    axios.get(`https://swapi.dev/api/people/`)
      .then(res =>
        setCharacters(res.data)
      )
      .catch(err =>
        console.log(err)
      )
    // setCharacters(addIds(characters));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        console.log(characters[0])
      }
      {
        characters.map(char => {
          return <Character key={char.url} char={char}/>
        })
      }
    </div>
  );
}

export default App;
