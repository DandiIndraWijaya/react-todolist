import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, color, align}) => {
    const className = [
        'header-btn',
        color === 'black' && 'main-black-color',
        color === 'red' && 'main-red-color',
        align === 'left' && 'align-left',
        align === 'right' && 'align-right'
    ].join(" ");

    return <button className={className} onClick={onClick} >{text}</button>
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