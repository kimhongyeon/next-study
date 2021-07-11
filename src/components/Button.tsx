import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-weight: bold;
  margin: 10px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer; 
  &:active, 
  &:foucus { 
      outline: none; 
  } 
  color: ${props => props.color || "gray"};
  background: ${props => props.background || "white"};

${(props) =>
    props.primary &&
    css`
      color: white;
      background: navy;
      border-color: navy;
    `}

    /* 크기 */
${props =>
    props.size === 'large' &&
    css`
        height: 3rem;
        font-size: 1.25rem;
    `}
 
${props =>
    props.size === 'medium' &&
    css`
        height: 2.25rem;
        font-size: 1rem;
    `}

${props =>
    props.size === 'small' &&
    css`
        height: 1.75rem;
        font-size: 0.875rem;
    `}
`;


function Button({ children, size, ...props }) {
  return <StyledButton size={size} {...props}>{children}</StyledButton>;
}

export default Button; 