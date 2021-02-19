// Write your Character component here
import React from 'react';
import styled from 'styled-components';

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

  .details {
    text-align: left;
    padding: 0 1rem;
    padding-bottom: 1px;
    border-top: 1px solid gray;
  }

  .expand-button {
    font-size: 150%;
  }  
`

function Character(props) {
  const { char, displayId, setDisplayId } = props;
  const charId = Number(char.url.substring(28, char.url.length - 1)) // TODO: 28 is janky, maybe take length of constants added together?

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
        <div className='expand-button' onClick={() => displayId == charId ? closeDetails() : openDetails(charId)}>
          { displayId == charId ? '–' : '+' }
        </div>
      </div>
      { 
        displayId== charId &&
          <div className='details'>
            { char.birth_year != 'n/a' && <p>Born: {char.birth_year}</p> }
            { char.gender != 'n/a' && <p>Gender: {char.gender}</p> }
            { char.height != 'n/a' && <p>Height: {char.height} cm</p> }
            { char.mass != 'n/a' && <p>Mass: {char.mass} kg</p> }
            { char.hair_color != 'n/a' && <p>Hair color: {char.hair_color}</p> }
            { char.eye_color != 'n/a' && <p>Eye color: {char.eye_color}</p> }
            { char.skin_color != 'n/a' && <p>Skin color: {char.skin_color}</p> }
          </div>
      }
    </StyledCharacter>
  )
}

export default Character;