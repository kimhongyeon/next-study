import React from 'react'; 
// import styled from 'styled-components'; 
import styled, { createGlobalStyle } from 'styled-components'; 
 
const GlobalStyle = createGlobalStyle` 
    body{ 
        padding: 0; margin: 0; 
    } 
`;
const Container = styled.div` 
    width: 100%; 
    height: 10%; 
    text-align: center;
    background-color: grey; 
`; 
const Button = styled.button` 
    border-radius: 50px; 
    margin: 10px;
    padding: 5px; 
    min-width: 120px; 
    font-size: 16px; 
    border: none; 
    border-radius: 4px; 
    background-color: white;
    font-color: white; 
    -webkit-appearance: none; 
    cursor: pointer; 
    &:active, 
    &:foucus { 
        outline: none; 
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


export default BaseButton;

