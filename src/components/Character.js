// Write your Character component here
import React from 'react';
import styled from 'styled-components';

function Character({ char }) {
    
    return (
        <p>
            {char.name};
        </p>
    )
}

export default Character;