import React from 'react'; 
// import styled from 'styled-components'; 
import styled, { createGlobalStyle } from 'styled-components'; 
 
const GlobalStyle = createGlobalStyle` 
    body{ 
        padding: 0; margin: 0; 
    } 
`;

function BaseButton() { 
    return ( 
    <Container> 
        <GlobalStyle /> 
        <Button as="button"
            onClick={() => alert('클릭완료')}>click
        </Button> 
         <Button >Hello</Button>
    </Container> 
    ); 
} 
const Container = styled.div` 
    width: 100%; 
    height: 10%; 
    text-align: center;
    background-color: black; 
`; 
const Button = styled.button` 
    border-radius: 50px; 
    padding: 5px; 
    min-width: 120px; 
    font-size: 16px; 
    border: none; 
    border-radius: 4px; 
    background-color: #74b9ff;
    font-color: white; 
    -webkit-appearance: none; 
    cursor: pointer; 
    &:active, 
    &:foucus { 
        outline: none; 
    } 
`; 

export default BaseButton;

