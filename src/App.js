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

  useEffect(() => {
    axios.get(`${BASE_URL}${PEOPLE}`)
      .then(res =>
        setCharacters(res.data)
      )
      .catch(err =>
        console.log(err)
      )
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char => {
          return <Character key={char.url} 
                            char={char} 
                            displayId={displayId} 
                            setDisplayId={setDisplayId} />
        })
      }
    </div>
  );
}

export default App;
