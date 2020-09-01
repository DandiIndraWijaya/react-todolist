import { css } from '@emotion/core';

export const addInput = (theme) => 
    css`
    background: unset;
    border: unset;
    padding: 0 64px;
  
    width: 100%;
    outline: unset;
    border-bottom: 1px solid ${theme.color.primary.red};
    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
`;


