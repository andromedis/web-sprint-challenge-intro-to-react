// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  background-color: white;
  margin: 1rem auto;
  width: 50%;

  .expand-bar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
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
          {
            displayId == charId ? '-' : '+'
          }
        </div>
      </div>
      { 
        displayId== charId &&
          <div className='details'>
            <p>Height: {char.height} cm</p>
            <p>Mass: {char.mass} kg</p>
          </div>
      }
    </StyledCharacter>
  )
}

export default Character;