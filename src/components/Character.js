// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import Details from './Details';

const StyledCharacter = styled.div`
  background-color: white;
  margin: 1rem auto;
  width: 94%;

  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 900px) {
    width: 50%;
  }

  .expand-bar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .expand-button {
    font-size: 150%;
  }  
`

function Character(props) {
  const { char, displayId, setDisplayId } = props;
  
  const charId = Number(char.url.substring(28, char.url.length - 1))

  const openDetails = (id) => {
    setDisplayId(id);
  }
    
  const closeDetails = () => {
    setDisplayId(null);
  }

  return (
    <StyledCharacter>
      <div className='expand-bar'>
        <h3>{char.name}</h3>
        <div className='expand-button' onClick={() => displayId === charId ? closeDetails() : openDetails(charId)}>
          { 
            displayId === charId ? '–' : '+' 
          }
        </div>
      </div>
      { 
        displayId === charId && <Details char={char}/>
      }
    </StyledCharacter>
  )
}

export default Character;