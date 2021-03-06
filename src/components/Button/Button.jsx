/** @jsx jsx  */
// import React from 'react';
import PropTypes from 'prop-types';
// import styles from './button.module.css';
import { useTheme } from 'emotion-theming';
import { jsx } from '@emotion/core';
import * as styles from './button.styles';

const Button = ({ text, onClick, color, align}) => {
    // const classNames = [
    //     'header-btn',
    //     color === 'black' && 'main-black-color',
    //     color === 'red' && 'main-red-color',
    //     align === 'left' && 'align-left',
    //     align === 'right' && 'align-right'
    // ].join(" ");

    // const classNames = cx(styles.headerBtn, {
    //     [styles.mainBlackColor]: color === 'black',
    //     [styles.mainRedColor]: color === 'red',
    //     [styles.alignLeft]: align === 'left',
    //     [styles.alignRight]: align === 'right'
    // }) 

    const theme = useTheme();

    return (
    // <button className={classNames} onClick={onClick} >{text}</button>
    <button css={styles.button({ align, color, theme })} onClick={onClick} >{text}</button>
    )
}

Button.defaultProps = {
    text: 'button',
    color: 'black',
    align: 'left'
}

Button.prototypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['black', 'red']),
    align: PropTypes.oneOf(['left', 'right'])
}


export default Button;