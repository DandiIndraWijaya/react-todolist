import { css } from '@emotion/core';

export const todos = () => 
    css`
    display: flex;
    flex-direction: column;
    min-height: 500px;
`;

export const todoPlaceholderText = () => 
    css`
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    padding: 16px;
    text-align: center;
`;

export const addButtonPlaceholderText = () => 
    css`
    font-family: "Bungee", sans-serif;
    font-size: 24px;
`;