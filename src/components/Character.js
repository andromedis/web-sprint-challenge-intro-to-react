// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background-color: white;
`

function Character(props) {
    const { char } = props;
    return (
        <StyledCharacter>
            {char.name};
        </StyledCharacter>
    )
}

export default Character;