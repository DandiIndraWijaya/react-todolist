import { css } from '@emotion/core';

export const button = ({ color, align, theme }) => {
    let textColor;
    const { color: { primary } } = theme;

    switch(color){
        case 'black':
            textColor = primary.black
            break;
        case 'red':
            textColor = primary.red
            break;
        default:
            textColor = primary.black
    }
    
    return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    /* width: 24%; */
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    text-align: ${align};
    &:active {
        text-shadow: 1px 1px 2px ${theme.color.primary.black};
      }
`;
} 