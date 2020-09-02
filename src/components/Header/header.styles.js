import { css } from '@emotion/core';

export const headerTitle = (theme) =>
    css`
    text-align: center;
  
    color: ${theme.color.primary.black};
    font-size: 3.6rem;
    font-family: 'Homemade Apple', sans-serif;
    text-transform: lowercase;
`;

