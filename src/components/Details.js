import React from 'react';
import styled from 'styled-components';

const StyledDetails = styled.div`
  text-align: left;
  padding: 0 1rem;
  padding-bottom: 1px;
  border-top: 1px solid gray;
`

function Details(props) {
  const { char } = props;
  return (
    <StyledDetails>
      { char.birth_year !== 'n/a' && <p>Born: {char.birth_year}</p> }
      { char.gender !== 'n/a' && <p>Gender: {char.gender}</p> }
      { char.height !== 'n/a' && <p>Height: {char.height} cm</p> }
      { char.mass != 'n/a' && <p>Mass: {char.mass} kg</p> }
      { char.hair_color !== 'n/a' && <p>Hair color: {char.hair_color}</p> }
      { char.eye_color !== 'n/a' && <p>Eye color: {char.eye_color}</p> }
      { char.skin_color !== 'n/a' && <p>Skin color: {char.skin_color}</p> }
    </StyledDetails>      
  );
}

export default Details;