import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [displayId, setDisplayId] = useState(null);

  const openDetails = (id) => {
    setDisplayId(id);
  }

  const closeDetails = () => {
    setDisplayId(null);
  }

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then()
      .catch()
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char => {
          return <Character />
        })
      }
    </div>
  );
}

export default App;
