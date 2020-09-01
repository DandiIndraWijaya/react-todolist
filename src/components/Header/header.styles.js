import { css } from '@emotion/core';

export const header = () => 
    css`
    display: flex;
    align-items: flex-start;
`;

export const headerTitle = (theme) =>
    css`
     /* flex: 1; */
    /* width: 52%; */
    text-align: center;
  
    color: ${theme.color.primary.black};
    font-size: 3.6rem;
    font-family: 'Homemade Apple', sans-serif;
    text-transform: lowercase;
`;

