import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

const StyledButton = styled.button`
    padding: 6px 16px;
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    color: ${props => props.textColor};
    /* width: 24%; */
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
    text-align: ${props => props.align};
    &:active {
        text-shadow: 1px 1px 2px ${props => props.blackColor};
      }`;

class Button extends React.Component {
    render(){
        const { text, onClick, color, align, theme } = this.props;
        const { color: { primary } } = theme;

        let blackColor =  primary.black;
        let textColor;
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

        return(
            <StyledButton textColor={textColor} blackColor={blackColor} align={align} onClick={onClick}>
                {text}
            </StyledButton>
        )
    }

    static defaultProps = {
        text: 'button',
        color: 'black',
        align: 'left'
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        color: PropTypes.oneOf(['black', 'red']),
        align: PropTypes.oneOf(['left', 'right'])
    }
}

export default withTheme(Button);
